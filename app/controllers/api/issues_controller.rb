class Api::IssuesController < ApplicationController
    def index
        @issues = Issue.all
        render json: @issues 
    end

    def create
        @issue = Issue.create!(issue_params)
        
        render json: @issue
    end

    def show
        @issue = Issue.find(params[:id])

        render json: @issue 
    end

    def update
        # find the issue by id
        @issue = Issue.find(params[:id])
        @artist.update!(artist_params)

        render json: @issue 
    end

    def destroy
        @issue = Issue.find(params[:id]).delete

        render status: :ok
    end

    private 

    def artist_params
        params.require(:issue).permit(:name, :location, :issue, :image) 
    end
end
