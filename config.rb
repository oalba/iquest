###
# Page options, layouts, aliases and proxies
###

activate :directory_indexes
set :lang, :cz
activate :i18n, :langs => [:cz, :en]

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

redirect 'kinds_of_products/rezervacni_systemy.html', to: "priklady_systemu/rezervacni_systemy.html"
redirect 'kinds_of_products/prodejni_portaly.html', to: "priklady_systemu/prodejni_portaly.html"
redirect 'kinds_of_products/crm_systemy.html', to: "priklady_systemu/crm_systemy.html"
redirect 'kinds_of_products/webove_dispecinky.html', to: "priklady_systemu/webove_dispecinky.html"
redirect 'kinds_of_products/informacni_portaly.html', to: "priklady_systemu/informacni_portaly.html"
redirect 'kinds_of_products/organizace_lidi.html', to: "priklady_systemu/organizace_lidi.html"
redirect 'kinds_of_products/komunikacni_aplikace.html', to: "priklady_systemu/komunikacni_aplikace.html"
redirect 'kinds_of_products/objednavkove_systemy.html', to: "priklady_systemu/objednavkove_systemy.html"
redirect 'kinds_of_products/databaze.html', to: "priklady_systemu/databaze.html"
redirect 'kinds_of_products/sprava_zakazek.html', to: "priklady_systemu/sprava_zakazek.html"
redirect 'kinds_of_products/facebook_aplikace.html', to: "priklady_systemu/facebook_aplikace.html"
redirect 'kinds_of_products/b2b_b2c_portaly.html', to: "priklady_systemu/b2b_b2c_portaly.html"

redirect 'web_application_development.html', to: "webove_aplikace_na_miru.html"
redirect 'corporate_information_systems.html', to: "firemni_informacni_systemy_na_miru.html"
redirect 'enterprise_mobile_applications.html', to: "podnikove_mobilni_aplikace.html"
redirect 'pillars.html', to: "proc_iquest.html"
redirect 'technology.html', to: "technologie.html"
redirect 'contact.html', to: "kontakt.html"

redirect 'webove_aplikace_na_miru.html', to: "webove-aplikace-na-miru.html"
redirect 'proc_iquest.html', to: "proc-iquest.html"
redirect 'prace_programator_ruby_on_rails.html', to: "prace-programator-ruby-on-rails.html"
redirect 'podnikove_mobilni_aplikace.html', to: "podnikove-mobilni-aplikace.html"
redirect 'not_only_money.html', to: "not-only-money.html"
redirect 'konzultaci_zdarma.html', to: "konzultaci-zdarma.html"
redirect 'iquest_way.html', to: "iquest-way.html"
redirect 'firemni_informacni_systemy_na_miru.html', to: "firemni-informacni-systemy-na-miru.html"
redirect 'priklady_systemu/b2b_b2c_portaly.html', to: "priklady-systemu/b2b-b2c-portaly.html"
redirect 'priklady_systemu/crm_systemy.html', to: "priklady-systemu/crm-systemy.html"
redirect 'priklady_systemu/facebook_aplikace.html', to: "priklady-systemu/facebook-aplikace.html"
redirect 'priklady_systemu/informacni_portaly.html', to: "priklady-systemu/informacni-portaly.html"
redirect 'priklady_systemu/komunikacni_aplikace.html', to: "priklady-systemu/komunikacni-aplikace.html"
redirect 'priklady_systemu/objednavkove_systemy.html', to: "priklady-systemu/objednavkove-systemy.html"
redirect 'priklady_systemu/organizace_lidi.html', to: "priklady-systemu/organizace-lidi.html"
redirect 'priklady_systemu/prodejni_portaly.html', to: "priklady-systemu/prodejni-portaly.html"
redirect 'priklady_systemu/rezervacni_systemy.html', to: "priklady-systemu/rezervacni-systemy.html"
redirect 'priklady_systemu/sprava_zakazek.html', to: "priklady-systemu/sprava-zakazek.html"
redirect 'priklady_systemu/webove_dispecinky.html', to: "priklady-systemu/webove-dispecinky.html"
redirect 'technologie/ruby_on_rails.html', to: "technologie/ruby-on-rails.html"
redirect 'reference/cia_news.html', to: "reference/cia-news.html"
redirect 'reference/modry_andel.html', to: "reference/modry-andel.html"
redirect 'blog.html', to: "blog.html"

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
