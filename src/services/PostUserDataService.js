import http from "@/http-common";

class PostUserDataService {

    getUser() {

        return http.get("/User");
    }

    create(data) {

        return http.post("/User", data)
    }

    update(data) {

        return http.put("/User", data)
    }

    insertImageProfile(user, data) {

        return http.post("/User/" + user + "/UploadImage", data, { headers: { 'Content-Type': 'multipart/form-data' } });
    }

}

export default new PostUserDataService();