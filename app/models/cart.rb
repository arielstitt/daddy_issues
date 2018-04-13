class Cart < ApplicationRecord
    has_many :merchandise , dependent: :destroy
end
