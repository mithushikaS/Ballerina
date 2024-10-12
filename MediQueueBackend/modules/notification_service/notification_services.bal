import ballerina/http;
import ballerina/log;

type Notification record {
    string recipientId;
    string message;
    string status;
    string timeStamp;
};

service /notifications on new http:Listener(8082) {

    // In-memory notification storage (this could later be connected to a DB or messaging service)
    map<Notification[]> notifications = {};

    // Send a notification (POST /notifications/send)
    resource function post send(http:Caller caller, http:Request req) returns error? {
        json payload = check req.getJsonPayload();
        Notification newNotification = check payload.cloneWithType(Notification);

        Notification[] userNotifications = notifications[newNotification.recipientId] but { () => [] };
        userNotifications.push(newNotification);
        notifications[newNotification.recipientId] = userNotifications;

        json responseMessage = { message: "Notification sent successfully" };
        check caller->respond(responseMessage);
    }

    // Retrieve notifications by recipient ID (GET /notifications/{recipientId})
    resource function get getNotifications(http:Caller caller, string recipientId) returns error? {
        Notification[] userNotifications = notifications[recipientId] but { () => [] };

        if (userNotifications.length() == 0) {
            json responseMessage = { message: "No notifications found" };
            check caller->respond(responseMessage, status = 404);
        } else {
            check caller->respond(userNotifications);
        }
    }
}
