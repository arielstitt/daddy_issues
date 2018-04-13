class Api::CartsController < ApplicationController
    
    def index
        @carts = Cart.all
        render json: @carts 
    end

    def create
        @cart = Cart.create!(cart_params)
        
        render json: @cart
    end

    def show
        @cart = Cart.find(params[:id])
        @merchandise = @cart.merchandise
        render json: {
           cart: @cart,
           merchandise: @merchandise
        } 
    end

    def update
        # find the cart by id
        @cart = Cart.find(params[:id])
        @cart.update!(cart_params)

        render json: @cart 
    end

    def destroy
        @cart = Cart.find(params[:id]).delete

        render status: :ok
    end

    private 

    def cart_params
        params.require(:cart).permit(:price, :quanitity) 
    end
end
