class User < ApplicationRecord
  validates_uniqueness_of :email
  validates_presence_of :first_name, :last_name, :email, :encrypted_password, :password
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 has_many :trips
end
