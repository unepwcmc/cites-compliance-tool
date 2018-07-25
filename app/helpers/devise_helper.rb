module DeviseHelper
  def devise_error_messages!
    flashes = flash.map { |name, msg| content_tag(:li, msg) }.join
    if (resource.errors.full_messages.length > 0) || (flashes.length > 0)
      output = '<div class="notification login__notification">'
      output += flashes
      output += resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
      output += '</div>'
      output.html_safe
    end
  end
end