(function(){var t,o={}.hasOwnProperty,e=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};t=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return e(o,t),o.prototype.routes={"":"home"},o.prototype.home=function(){return(new Application.Views.Home).render()},o}(Backbone.Router),Application.router=new t,Application.Views.Home=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return e(o,t),o.prototype.el="#content",o.prototype.render=function(){return this.$el.html(Application.Templates.home())},o}(Backbone.View)}).call(this);