const express = require("express")
const favoriteRouter = express.Router()
const favoriteController = require("../controller/favoriteController.js");
const { authenticateToken } = require("../middleware/authentication.js");
const routeLists = require("../config/routeConfig.js");
const {
    CREATE_FAVORITE,
    GET_FAVORITE,
    REMOVE_ITEM_FROM_FAVORITE,
    CLEAR_FAVORITE,
    ADD_TO_CART_FROM_FAVORITE,
    DOWNLOAD_FAVORITE
} = routeLists.favorite

favoriteRouter.post(CREATE_FAVORITE, authenticateToken, favoriteController.addToFavorite);    
favoriteRouter.get(GET_FAVORITE, authenticateToken, favoriteController.getFavoriteData);    
favoriteRouter.put(REMOVE_ITEM_FROM_FAVORITE, authenticateToken, favoriteController.removeFavorite); 
favoriteRouter.put(CLEAR_FAVORITE, authenticateToken, favoriteController.removeAllFavorite); 
favoriteRouter.put(DOWNLOAD_FAVORITE, authenticateToken, favoriteController.downloadFAVORITE); 
favoriteRouter.post(ADD_TO_CART_FROM_FAVORITE, authenticateToken, favoriteController.addToCartFromFavorite); 

module.exports = favoriteRouter
