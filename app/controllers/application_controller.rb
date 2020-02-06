class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    protect_from_forgery with: :null_session
    # protect_from_forgery with: :exception
    before_action :configure_permitted_parameters, if: :devise_controller?
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :first_name, :last_name, :password_confirmation])
    end


	private

	def after_sign_in_path_for(resource)
		"/trips"
	end

end
