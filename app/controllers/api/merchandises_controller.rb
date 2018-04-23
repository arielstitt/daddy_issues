class Api::MerchandisesController < ApplicationController


    def index
        @merchandise = Merchandise.all
            
        @charcoals = Merchandise.where(merch_type: 'Charcoal')
        @mauves = Merchandise.where(merch_type: 'Mauve')
        @candles = Merchandise.where(merch_type: 'candle')

        render json: {
            charcoals: @charcoals,
            mauves: @mauves,
            candles: @candles
        }
    end
    
    # def index
    #      @charcoals = Merchandise.where(merch_type: 'Charcoal')  
    #     render json: @charcoals
    # end

    def show
        @merchandise = Merchandise.find(params[:id])
        render json: @merchandise 
    end

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

    private 

    def merchandise_params
        params.require(:merchandise).permit(:price, :quanitity, :title, :description, :image) 
    end
    
end
