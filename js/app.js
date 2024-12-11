/* create docReady event */
function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
/* create docReady event end */


    /* set cookies and marker objects */
    window.cookies= function(){var e,t,n;return n=function(e){return new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*")},t=function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")},e=/^(?:expires|max\-age|path|domain|secure)$/,{get:function(e){return e&&this.has(e)?unescape(document.cookie.replace(n(e),"$1")):null},set:function(t,n,r,s,a,c){var i;if(t&&!e.test(t)){if(i="",r)switch(typeof r){case"number":i="; max-age="+r;break;case"string":i="unlimited"===r?"; expires=Fri, 10 Jul 2099 13:05:42 UTC":"; expires="+r;break;case"object":r.hasOwnProperty("toGMTString")&&(i="; expires="+r.toGMTString())}document.cookie=escape(t)+"="+escape(n)+i+(a?"; domain="+a:"")+(s?"; path="+s:"")+(c?"; secure":"")}},remove:function(e){var t;e&&this.has(e)&&(t=new Date,t.setDate(t.getDate()-100),document.cookie=escape(e)+"=; expires="+t.toGMTString()+"; path=/")},has:function(e){return t(e).test(document.cookie)},object:function(e){var t;if(e&&this.has(e))return t=this.get(e),new Function("return "+unescape(t.replace(/\+/g," ")))()}}}();
    window.Marker = {
        default_marker: set_marker,
        get: function()
        {
            if( set_cookies == true ){
                return cookies.get('marker');
            } else {
                return set_marker;
            }

        },
        set: function(value)
        {
            domain = window.location.hostname;
            expire = new Date(+(new Date) + 60 * 60 * 24 * 30 * 1e3);
            cookies.set('marker', value, expire.toGMTString(), '/', domain);
            return value;
        },
        handle_marker: function(value)
        {
            if (value && this._new_marker(value) && (this.is_affiliate(value) || !this.is_affiliate(this.get())))
            {
                return this.set(value);
            }
            if (!this.get())
            {
                return this.set(this.default_marker);
            }
            return this.get();
        },
        _new_marker: function(value)
        {
            return value !== this.get();
        },
        get_from_params: function()
        {
            var a, b, i, p;
            a = window.location.search.substr(1).split('&');
            if (a === "")
            {
                return {};
            }
            b = {};
            i = 0;
            while (i < a.length)
            {
                p = a[i].split("=", 2);
                if (p.length === 1)
                {
                    b[p[0]] = "";
                }
                else
                {
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                }
                ++i;
            }
            return b.marker;
        },
        get_marker: function()
        {
            if (this.get_from_params() != null)
            {
                this.set(this.get_from_params())
            }
            if (this.get() == null)
            {
                this.set(this.default_marker);
            }
            return this.get() || this.default_marker;
        }
    };
    /* set cookies and marker objects end */

    if ( set_cookies == true ) {
        marker = Marker.get_marker();
    } else {
        var get_marker = Marker.get_from_params();
        if ( get_marker == undefined ) {
            marker = set_marker;
        } else {
            marker = get_marker;
        }

    }


/* add form widgets */
  docReady(function() {
        var searchDestination;
        var script = document.createElement('script');
        script.setAttribute('charset', 'utf-8');
        script.setAttribute('src', 'https://tp.media/content?&shmarker='+ marker +'._landings&show_hotels=true&locale=en&currency=usd&searchUrl=search.hotellook.com&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=true&promo_id=7873&campaign_id=101&destination=' + (searchDestination || ''));
        var script1 = document.createElement('script');
        script1.setAttribute('charset', 'utf-8');
        script1.setAttribute('src', 'https://tp.media/content?&shmarker='+ marker +'._landings&show_hotels=true&locale=en&currency=usd&searchUrl=search.hotellook.com&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=true&promo_id=7873&campaign_id=101&destination=' + (searchDestination || ''));

        var script2 = document.createElement('script');
        script2.setAttribute('charset', 'utf-8');
        script2.setAttribute('src', 'https://tp.media/content?&shmarker='+ marker +'._landings&show_hotels=true&locale=en&currency=usd&searchUrl=search.hotellook.com&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=true&promo_id=7873&campaign_id=101&destination=' + (searchDestination || ''));
     document.querySelector('#present__form').insertAdjacentElement('beforeend', script);
     document.querySelector('#widget__form').insertAdjacentElement('beforeend', script1);
document.querySelector('#widget2__form').insertAdjacentElement('beforeend', script2);
    });
/* add form widgets end */
/* set links address */
    docReady(function()
    {
        var href = "https://www.hotellook.com/?marker=" + marker +'._landings';
        var logo1 = document.getElementById('logo-top');
        var logo2 = document.getElementById('logo-bottom');
		var discountsItems = document.getElementsByClassName('discounts-item');
		var slides = document.getElementsByClassName('slide');
		logo1.setAttribute('href', href);
		logo2.setAttribute('href', href);
		for (var i = 0; i < discountsItems.length; i++)
		{
		discountsItems[i].setAttribute('href', href);
		}
		for (var i = 0; i < slides.length; i++)
		{
			slides[i].setAttribute('href', href);
		}
    });
/* set links address */