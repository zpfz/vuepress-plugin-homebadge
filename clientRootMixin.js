import './style.css'
export default {
  props: {
    badgeGroup: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      timer: null,
    }
  },

  updated () {
    this.insertBadge();
  },

  methods: {
    insertBadge() {
      let dom = document.querySelector(selector);
      let sb_dom = document.querySelector('.star-badge');
      let bg_dom = document.querySelector('.badge-group');
      if (sb_dom) {
        return;
      }else{
        if (dom) {
          if (badgeLink && repoLink) {
            var badge = document.createElement("span");
            badge.className = "star-badge";
            badge.innerHTML = "<a href='"+ repoLink +"' target='_blank'><img src='" + badgeLink + "' /></a>";
            dom.appendChild(badge);
          }
          this.clearTimeout();
        } else {
          this.timer = window.setTimeout(this.insertBadge, 0);
        }
      }

      if (bg_dom) {
        return;
      }else{
        if (dom) {
          if (badgeGroup) {
            let badge = document.createElement("div");
            let badgeGroupLink = "";
            badge.className = "badge-group";
            for (var i = 0; i < badgeGroup.length; i++) {
              badgeGroupLink += "<img src='" + badgeGroup[i] + "' />";
              console.log(badgeGroupLink);
            }
            badge.innerHTML = badgeGroupLink;
            dom.appendChild(badge);
          }
          this.clearTimeout();
        } else {
          this.timer = window.setTimeout(this.insertBadge, 0);
        }
      }
    },
    clearTimeout() {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
}