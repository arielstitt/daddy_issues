class Api::MerchandisesController < ApplicationController


    def index
    # since there are three merch types, I added a query where it would grab the items from their merch-type name
        @charcoals = Merchandise.where(merch_type: 'Charcoal')
        @mauves = Merchandise.where(merch_type: 'Mauve')
        @candles = Merchandise.where(merch_type: 'candle')
      
    # then I render the items individually. In the database, it is organized by the name
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
        @candle = Merchandise.find(params[:id])
        @mauve = Merchandise.find(params[:id])
        @charcoal = Merchandise.find(params[:id])
        
        render json: {
            merchandise: @merchandise,
            mauve: @mauve,
            charcoal: @charcoal
        }


    end



    private 

    def merchandise_params
        params.require(:merchandise).permit(:price, :quanitity, :title, :description, :image) 
    end
    
end
