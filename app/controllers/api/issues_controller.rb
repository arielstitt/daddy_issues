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
        @issue.update!(issue_params)

        render json: @issue 
    end

    def destroy
        @issue = Issue.find(params[:id]).delete

        render status: :ok
    end

    private 

    def issue_params
        params.require(:issue).permit(:name, :location, :description, :image) 
    end
end
