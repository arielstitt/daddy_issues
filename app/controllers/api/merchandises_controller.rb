class Api::MerchandisesController < ApplicationController

    def index
        @merchandises = Merchandise.all
        render json: @merchandises 
    end

    # def create
    #     @merchandise = Merchandise.create!(merchandise_params)
        
    #     render json: @merchandise
    # end

    # def show
    #     @merchandise = Merchandise.find(params[:id])

    #     render json: @merchandise 
    # end

    # def update
    #     # find the merchandise by id
    #     @merchandise = Merchandise.find(params[:id])
    #     @merchandise.update!(merchandise_params)

    #     render json: @merchandise 
    # end

    # def destroy
    #     @merchandise = Merchandise.find(params[:id]).delete

    #     render status: :ok
    # end

    # private 

    # def merchandise_params
    #     params.require(:merchandise).permit(:price, :quanitity) 
    # end
    
end
