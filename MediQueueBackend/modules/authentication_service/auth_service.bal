import ballerina/http;
import ballerina/jwt;
import ballerina/time;
import ballerina/crypto;

// Secret key to sign JWT
string secretKey = "<YOUR_SECRET_KEY>";

// In-memory user storage (for demonstration)
map<json> users = {};

// HTTP service for authentication
service /auth on new http:Listener(8080) {

    // User sign-up
    resource function post register(http:Caller caller, http:Request req) returns json|error {
        json userData = check req.getJsonPayload();
        
        string username = (check userData.username).toString();
        string password = (check userData.password).toString();

        if (users.hasKey(username)) {
            return { message: "User already exists" };
        }

        // Store user credentials (you can hash the password here using crypto)
        users[username] = { password: password };

        return { message: "User registered successfully" };
    }

    // User login and JWT token generation
    resource function post login(http:Caller caller, http:Request req) returns json|error {
        json loginData = check req.getJsonPayload();
        
        string username = (check loginData.username).toString();
        string password = (check loginData.password).toString();

        if (!users.hasKey(username) || (check users[username].password).toString() != password) {
            return { message: "Invalid username or password" };
        }

        // Generate JWT Token
        string token = generateJWT(username);
        return { message: "Login successful", token: token };
    }

    // Generate JWT token
    function generateJWT(string username) returns string {
        // JWT header and payload
        jwt:Header header = {alg: "HS256", typ: "JWT"};
        jwt:Payload payload = {
            iss: "ballerina",
            sub: username,
            aud: "MediQueueApp",
            exp: time:addSecondsToTime(time:currentTime(), 3600) // token expires in 1 hour
        };

        // Sign the JWT with the secret key
        string signedJWT = check jwt:generateJws(header, payload, secretKey, algorithm = crypto:HS256);
        return signedJWT;
    }
}

function generateJWT(string username) returns string {
    return "";
}






