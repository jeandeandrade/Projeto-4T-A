import http from "@/http-common";

class PostProductsDataService {

    getProducts() {

        return http.get("/Product");
    }

    create(data) {

        return http.post("/Product", data)
    }

    update(data, id) {

        return http.put("/Product/" + id, data)
    }

    getProductId(id) {
        return http.get("/Product/" + id);
    }

    
}

export default new PostProductsDataService();