import { showLoading, hideLoading } from '@uni/loading';

export default function GLoading(options) {
  this.count = 0;
  options = Object.assign({}, options);

  const hide = (opt) => {
    hideLoading(opt);
    return this;
  };

  const show = function (opt) {
    showLoading(opt);
    return this;
  };

  if (options.sync) {
    this.start = function () {
      this.count += 1;
      return show();
    };
    this.stop = function (force) {
      this.count -= 1;
      if (this.count <= 0 || force) {
        this.count = 0;
        hide();
      }
      return this;
    };
  } else {
    this.show = show;
    this.hide = hide;
  }
}
