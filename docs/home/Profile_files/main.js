// src/main.ts
import { bootstrapApplication } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_platform-browser.js?v=351e25f0";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import { provideRouter } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_router.js?v=351e25f0";
import { provideHttpClient, withFetch } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_common_http.js?v=351e25f0";

// src/app/home/home.component.ts
import { Component as Component2 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import { MatCardModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_card.js?v=351e25f0";

// src/app/lib/component/casourel/casourel.component.ts
import { Component } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import { MatIconModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_icon.js?v=351e25f0";
import { CommonModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_common.js?v=351e25f0";
import { MatButtonModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_button.js?v=351e25f0";
import { trigger, state, style, animate, transition } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_animations.js?v=351e25f0";
import * as i0 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import * as i1 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_icon.js?v=351e25f0";
import * as i2 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_button.js?v=351e25f0";
function CasourelComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div");
    i0.\u0275\u0275listener("@swap.done", function CasourelComponent_For_1_Conditional_0_Template_div_animation_swap_done_0_listener($event) {
      i0.\u0275\u0275restoreView(_r1);
      const $index_r2 = i0.\u0275\u0275nextContext().$index;
      const ctx_r2 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r2.onDone($event, $index_r2));
    });
    i0.\u0275\u0275element(1, "img", 2);
    i0.\u0275\u0275elementStart(2, "div", 3)(3, "h3");
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p");
    i0.\u0275\u0275text(6);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slide_r4 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275property("@swap", slide_r4.class);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275propertyInterpolate("alt", slide_r4.title);
    i0.\u0275\u0275property("src", slide_r4.src, i0.\u0275\u0275sanitizeUrl);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(slide_r4.title);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(slide_r4.subtitle);
  }
}
function CasourelComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275template(0, CasourelComponent_For_1_Conditional_0_Template, 7, 5, "div");
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    i0.\u0275\u0275conditional(slide_r4.class !== "void" ? 0 : -1);
  }
}
var CasourelComponent = class _CasourelComponent {
  slides = new Array(3).fill({ id: -1, src: "", title: "", subtitle: "", class: "" });
  slide;
  ngOnInit() {
    this.slides[0] = {
      src: "home/angular.webp",
      title: "First slide",
      subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      class: "active"
    };
    this.slides[1] = {
      src: "home/react.webp",
      title: "Second slide",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      class: "void"
    };
    this.slides[2] = {
      src: "home/java.webp",
      title: "Third slide",
      subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      class: "void"
    };
    this.slide = this.slides[0];
  }
  prev() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].class === "active") {
        this.slides[i].class = "left";
        if (i === 0) {
          this.slides[this.slides.length - 1].class = "right";
        } else {
          this.slides[i - 1].class = "right";
        }
        break;
      }
    }
  }
  next() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].class === "active") {
        this.slides[i].class = "right";
        if (i + 1 === this.slides.length) {
          this.slides[0].class = "left";
        } else {
          this.slides[i + 1].class = "left";
        }
        break;
      }
    }
  }
  onDone(event, index) {
    if (event.phaseName === "done") {
      if (event.fromState === "active" && event.toState == "right") {
        this.slides[index].class = "void";
      }
      if (event.fromState === "void" && event.toState == "left") {
        this.slides[index].class = "active";
      }
      if (event.fromState === "active" && event.toState == "left") {
        this.slides[index].class = "void";
      }
      if (event.fromState === "void" && event.toState == "right") {
        this.slides[index].class = "active";
      }
    }
  }
  static \u0275fac = function CasourelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasourelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _CasourelComponent, selectors: [["app-casourel"]], features: [i0.\u0275\u0275ExternalStylesFeature(["e003fd97287af9e0ae3c76943571c8c1d366a73f947064af7c8c6220f4f42d09.css"])], decls: 8, vars: 0, consts: [["mat-icon-button", "", 1, "left-arrow", 3, "click"], ["mat-icon-button", "", 1, "right-arrow", 3, "click"], ["loading", "lazy", 1, "d-block", "w-100", 3, "src", "alt"], [1, "title"]], template: function CasourelComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275repeaterCreate(0, CasourelComponent_For_1_Template, 1, 1, null, null, i0.\u0275\u0275repeaterTrackByIndex);
      i0.\u0275\u0275elementStart(2, "button", 0);
      i0.\u0275\u0275listener("click", function CasourelComponent_Template_button_click_2_listener() {
        return ctx.prev();
      });
      i0.\u0275\u0275elementStart(3, "mat-icon");
      i0.\u0275\u0275text(4, "keyboard_arrow_left");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(5, "button", 1);
      i0.\u0275\u0275listener("click", function CasourelComponent_Template_button_click_5_listener() {
        return ctx.next();
      });
      i0.\u0275\u0275elementStart(6, "mat-icon");
      i0.\u0275\u0275text(7, "keyboard_arrow_right");
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275repeater(ctx.slides);
    }
  }, dependencies: [MatIconModule, i1.MatIcon, CommonModule, MatButtonModule, i2.MatIconButton], data: { animation: [
    trigger("swap", [
      state("left", style({
        transform: "translateX(-100%)"
      })),
      state("right", style({
        transform: "translateX(100%)"
      })),
      state("active", style({
        transform: "translateX(0px)"
      })),
      transition("left => active", [animate("0.5s")]),
      transition("right => active", [animate("0.5s")]),
      transition("active => left", [animate("0.5s")]),
      transition("active => right", [animate("0.5s")])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(CasourelComponent, { className: "CasourelComponent", filePath: "src/app/lib/component/casourel/casourel.component.ts", lineNumber: 41 });
})();

// src/app/home/home.component.ts
import * as i02 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], features: [i02.\u0275\u0275ExternalStylesFeature(["c9cde8fec78389122460f1a68ef773fa925af8c5d84661866959ec6f6ca298f0.css"])], decls: 31, vars: 0, consts: [[1, "banner"], [1, "fire"], [1, "avatar"], [1, "intro"], ["src", "home/java.webp", "title", "Java"], ["src", "home/spring.webp", "title", "Spring"], ["src", "home/angular.webp", "title", "Angular"], ["src", "home/react.webp", "title", "React"], ["src", "home/aws.webp", "title", "AWS"], ["src", "home/playwright.webp", "title", "Playwright"], ["src", "home/k6.webp", "title", "K6"], ["src", "home/cicd.webp", "title", "CICD"], [2, "width", "600px", "height", "400px", "margin", "0px auto"], [1, "greeting"], ["src", "home/say-hi.gif"], [1, "map"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      i02.\u0275\u0275text(2, "Let read my stories");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(3, "div", 2);
      i02.\u0275\u0275element(4, "div");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(5, "div", 3);
      i02.\u0275\u0275element(6, "div");
      i02.\u0275\u0275elementStart(7, "div")(8, "p");
      i02.\u0275\u0275text(9, "As a full-stack developer !");
      i02.\u0275\u0275element(10, "br");
      i02.\u0275\u0275text(11, "Great experience on ...");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(12, "div");
      i02.\u0275\u0275element(13, "img", 4)(14, "img", 5)(15, "img", 6)(16, "img", 7)(17, "img", 8)(18, "img", 9)(19, "img", 10)(20, "img", 11);
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(21, "div", 12);
      i02.\u0275\u0275element(22, "app-casourel");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(23, "div", 13);
      i02.\u0275\u0275element(24, "img", 14);
      i02.\u0275\u0275elementStart(25, "div")(26, "h2");
      i02.\u0275\u0275text(27, "Nice to Meet You");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(28, "p");
      i02.\u0275\u0275text(29, "Hi, My name's Anh. I'm from Vietnam and you can call me 'Kris'. This place where I can share my greatest inspiration and candidly display the different sides of my passion project. I invite you to explore my content and learn about what makes me tick. Please reach out and engage\u2014I\u2019m happy to hear from you, as well.");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275element(30, "div", 15);
    }
  }, dependencies: [MatCardModule, CasourelComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 11 });
})();

// src/app/angular/casourel-guide/casourel-guide.component.ts
import { Component as Component3 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import { CommonModule as CommonModule2 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_common.js?v=351e25f0";

// src/app/lib/directive/highlight.directive.ts
import { Directive, input, SecurityContext, Injectable, numberAttribute } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";

// src/app/lib/utils/string.utils.ts
var StringUtils = class {
  static indexOf(str, subStr, i) {
    return str.split(subStr, i).join(subStr).length;
  }
};

// src/app/lib/directive/highlight.directive.ts
import * as i03 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import * as i12 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_platform-browser.js?v=351e25f0";
import * as i22 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_common_http.js?v=351e25f0";
var hljs = window["hljs"];
var HighlightDirective = class _HighlightDirective {
  eRef;
  sanitizer;
  http;
  url = input.required();
  fromLine = input(1, { transform: numberAttribute });
  toLine = input(0, { transform: numberAttribute });
  constructor(eRef, sanitizer, http) {
    this.eRef = eRef;
    this.sanitizer = sanitizer;
    this.http = http;
  }
  ngOnInit() {
    this.http.get(this.url(), { responseType: "text" }).subscribe((resp) => {
      const fromIndex = this.fromLine() == 1 ? 0 : StringUtils.indexOf(resp, "\n", this.fromLine() - 1) + 1;
      const toIndex = this.toLine() != 0 ? StringUtils.indexOf(resp, "\n", this.toLine()) + 1 : void 0;
      const code = resp.slice(fromIndex, toIndex);
      this.eRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.escapeHtml(code));
      requestAnimationFrame(() => {
        hljs.highlightElement(this.eRef.nativeElement);
        hljs.lineNumbersBlock(this.eRef.nativeElement, {
          singleLine: false,
          startFrom: this.fromLine()
        });
      });
    });
  }
  escapeHtml(str) {
    return str.replace(/[&<>'"]/g, (x) => "&#" + x.charCodeAt(0) + ";");
  }
  static \u0275fac = function HighlightDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighlightDirective)(i03.\u0275\u0275directiveInject(i03.ElementRef), i03.\u0275\u0275directiveInject(i12.DomSanitizer), i03.\u0275\u0275directiveInject(i22.HttpClient));
  };
  static \u0275dir = /* @__PURE__ */ i03.\u0275\u0275defineDirective({ type: _HighlightDirective, selectors: [["", "appHighlight", ""]], hostVars: 2, hostBindings: function HighlightDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      i03.\u0275\u0275classProp("hljs", true);
    }
  }, inputs: { url: [1, "url"], fromLine: [1, "fromLine"], toLine: [1, "toLine"] } });
  static \u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({ token: _HighlightDirective, factory: _HighlightDirective.\u0275fac });
};

// src/app/angular/casourel-guide/casourel-guide.component.ts
import * as i04 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
var CasourelGuideComponent = class _CasourelGuideComponent {
  static \u0275fac = function CasourelGuideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasourelGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _CasourelGuideComponent, selectors: [["app-casourel-guide"]], decls: 3, vars: 0, consts: [["appHighlight", "", "url", "https://gist.githubusercontent.com/seabird86/3ca3b2c540af6719c32e4372d1ccfd6b/raw/ac03a937eed666fc38511311a84c3974f9370290/casourel.component.ts", "fromLine", "4", "toLine", "50", 1, "language-typescript"]], template: function CasourelGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "pre");
      i04.\u0275\u0275element(1, "code", 0);
      i04.\u0275\u0275text(2, "\n\n\nhttps://gist.githubusercontent.com/seabird86/be052049a0974bab9a01e56c8b837910/raw/d919cb90dbb7999db43dcac0271b5c9ca8ec644a/highlight.directive.ts\n");
      i04.\u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule2, HighlightDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(CasourelGuideComponent, { className: "CasourelGuideComponent", filePath: "src/app/angular/casourel-guide/casourel-guide.component.ts", lineNumber: 10 });
})();

// src/app/angular/highlightjs-guide/highlightjs-guide.component.ts
import { Component as Component4 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import * as i05 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
var HighlightjsGuideComponent = class _HighlightjsGuideComponent {
  static \u0275fac = function HighlightjsGuideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighlightjsGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _HighlightjsGuideComponent, selectors: [["app-highlightjs-guide"]], decls: 76, vars: 0, consts: [[2, "text-align", "center"], ["appHighlight", "", "url", "https://gist.githubusercontent.com/seabird86/be052049a0974bab9a01e56c8b837910/raw/d919cb90dbb7999db43dcac0271b5c9ca8ec644a/highlight.directive.ts", "fromLine", "4", "toLine", "10", 1, "language-typescript"], ["appHighlight", "", "url", "https://gist.githubusercontent.com/seabird86/7f3baf51f13d3a8501289398a9ea6d0a/raw/7d2a89ebd8faed267436415a0386e28e346cb7f9/highlight-index.html", "fromLine", "17", "toLine", "25", 1, "language-xml"], ["appHighlight", "", "url", "https://gist.githubusercontent.com/seabird86/be052049a0974bab9a01e56c8b837910/raw/d919cb90dbb7999db43dcac0271b5c9ca8ec644a/highlight.directive.ts", 1, "language-typescript"], ["href", "https://highlightjs.org"], ["href", "https://github.com/wcoder/highlightjs-line-numbers.js"], ["href", "https://github.com/arronhunt/highlightjs-copy"], ["href", "https://github.com/MurhafSousli/ngx-highlightjs"]], template: function HighlightjsGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "div")(1, "h1", 0);
      i05.\u0275\u0275text(2, "Using highlightjs in Angular");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(3, "h3");
      i05.\u0275\u0275text(4, "Purpose");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(5, "ul")(6, "li");
      i05.\u0275\u0275text(7, "As a angular developer, how to create a directive that shows a code snippet on gist in angular application. It should highlight syntax, display line number and copy button. ");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(8, "li");
      i05.\u0275\u0275text(9, "I tried to use the package ngx-highlightjs. But I cannot add more plugin ");
      i05.\u0275\u0275elementStart(10, "code");
      i05.\u0275\u0275text(11, "copy button");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275text(12, " and customize ");
      i05.\u0275\u0275elementStart(13, "code");
      i05.\u0275\u0275text(14, "fromLine");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275text(15, " and ");
      i05.\u0275\u0275elementStart(16, "code");
      i05.\u0275\u0275text(17, "toLine");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275text(18, " in this library. So, I don't use it.");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(19, "h3");
      i05.\u0275\u0275text(20, "Result");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(21, "pre");
      i05.\u0275\u0275text(22, "        ");
      i05.\u0275\u0275element(23, "code", 1);
      i05.\u0275\u0275text(24, "\n    ");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(25, "h3");
      i05.\u0275\u0275text(26, "How to do");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(27, "ul")(28, "li");
      i05.\u0275\u0275text(29, "Add the following lines in the src/index.html");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(30, "pre");
      i05.\u0275\u0275text(31, "        ");
      i05.\u0275\u0275element(32, "code", 2);
      i05.\u0275\u0275text(33, "\n    ");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(34, "ul")(35, "li");
      i05.\u0275\u0275text(36, "You need to add the <script> that supports the language you would like to highlight. In my example, I use typescript.min.js");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(37, "ul")(38, "li");
      i05.\u0275\u0275text(39, "Install ");
      i05.\u0275\u0275elementStart(40, "code");
      i05.\u0275\u0275text(41, "highlightjs");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275text(42, " package. We will only use the Typescript declaration file of this package in the directive file.");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(43, "pre");
      i05.\u0275\u0275text(44, "        ");
      i05.\u0275\u0275elementStart(45, "code");
      i05.\u0275\u0275text(46, "npm install highlight.js");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275text(47, "\n    ");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(48, "ul")(49, "li");
      i05.\u0275\u0275text(50, "Create a directive like the following code:");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(51, "pre");
      i05.\u0275\u0275text(52, "        ");
      i05.\u0275\u0275element(53, "code", 3);
      i05.\u0275\u0275text(54, "\n    ");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(55, "ul")(56, "li");
      i05.\u0275\u0275text(57, "In the directive file, we use the function `highlightElement` for the `copy button` feature instead of using the function `highlight` as in the package ngx-highlightjs.");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(58, "h3");
      i05.\u0275\u0275text(59, "References:");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(60, "p")(61, "i");
      i05.\u0275\u0275text(62, "Thanks for the authors who developed the below libraries, published and shared to everyone.");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(63, "ol")(64, "li")(65, "a", 4);
      i05.\u0275\u0275text(66, "https://highlightjs.org");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(67, "li")(68, "a", 5);
      i05.\u0275\u0275text(69, "https://github.com/wcoder/highlightjs-line-numbers.js");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(70, "li")(71, "a", 6);
      i05.\u0275\u0275text(72, "https://github.com/arronhunt/highlightjs-copy");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(73, "li")(74, "a", 7);
      i05.\u0275\u0275text(75, "https://github.com/MurhafSousli/ngx-highlightjs");
      i05.\u0275\u0275elementEnd()()()();
    }
  }, dependencies: [HighlightDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(HighlightjsGuideComponent, { className: "HighlightjsGuideComponent", filePath: "src/app/angular/highlightjs-guide/highlightjs-guide.component.ts", lineNumber: 9 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "home", component: HomeComponent },
  { path: "angular/casourel-guide", component: CasourelGuideComponent },
  { path: "angular/highlightjs-guide", component: HighlightjsGuideComponent }
];

// src/app/app.config.ts
import { provideAnimationsAsync } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_platform-browser_animations_async.js?v=351e25f0";
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ]
};

// src/app/app.component.ts
import { Component as Component5 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import { RouterOutlet, RouterLink } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_router.js?v=351e25f0";
import { MatMenuModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_menu.js?v=351e25f0";
import { MatButtonModule as MatButtonModule2 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_button.js?v=351e25f0";
import { MatIconModule as MatIconModule2 } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_icon.js?v=351e25f0";
import { MatToolbarModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_toolbar.js?v=351e25f0";
import { MatDividerModule } from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_divider.js?v=351e25f0";
import * as i06 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_core.js?v=351e25f0";
import * as i13 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_button.js?v=351e25f0";
import * as i23 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_icon.js?v=351e25f0";
import * as i3 from "/@fs/Users/kris/Projects/profile/.angular/cache/19.0.4/profile/vite/deps/@angular_material_toolbar.js?v=351e25f0";
var AppComponent = class _AppComponent {
  title = "profile";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], features: [i06.\u0275\u0275ExternalStylesFeature(["14058c8b3bdf607f1f6f1066def2cd442a5b99ba91e3a178a620175bcc60fdac.css"])], decls: 22, vars: 0, consts: [["src", "home/avatar2.png"], [1, "spacer"], ["mat-button", "", "routerLink", "/home"], ["fontIcon", "home"], ["mat-button", ""], ["fontIcon", "info"], ["fontIcon", "wysiwyg"], ["href", "mailto:seabird86@gmail.com"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "mat-toolbar");
      i06.\u0275\u0275element(1, "img", 0);
      i06.\u0275\u0275elementStart(2, "span");
      i06.\u0275\u0275text(3, "Kris");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275element(4, "span", 1);
      i06.\u0275\u0275elementStart(5, "button", 2);
      i06.\u0275\u0275element(6, "mat-icon", 3);
      i06.\u0275\u0275text(7, "Home");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(8, "button", 4);
      i06.\u0275\u0275element(9, "mat-icon", 5);
      i06.\u0275\u0275text(10, "About");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(11, "button", 4);
      i06.\u0275\u0275element(12, "mat-icon", 6);
      i06.\u0275\u0275text(13, " Blog ");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(14, "div");
      i06.\u0275\u0275element(15, "router-outlet");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(16, "footer")(17, "p")(18, "a", 7);
      i06.\u0275\u0275text(19, "seabird86@gmail.com");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(20, "p");
      i06.\u0275\u0275text(21, "\xA92002 created by Kris Nguyen");
      i06.\u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterOutlet, MatButtonModule2, i13.MatButton, MatMenuModule, MatIconModule2, i23.MatIcon, RouterLink, MatToolbarModule, i3.MatToolbar, MatDividerModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2xpYi9jb21wb25lbnQvY2Fzb3VyZWwvY2Fzb3VyZWwuY29tcG9uZW50LnRzIiwic3JjL2FwcC9saWIvY29tcG9uZW50L2Nhc291cmVsL2Nhc291cmVsLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hbmd1bGFyL2Nhc291cmVsLWd1aWRlL2Nhc291cmVsLWd1aWRlLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYW5ndWxhci9jYXNvdXJlbC1ndWlkZS9jYXNvdXJlbC1ndWlkZS5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvbGliL2RpcmVjdGl2ZS9oaWdobGlnaHQuZGlyZWN0aXZlLnRzIiwic3JjL2FwcC9saWIvdXRpbHMvc3RyaW5nLnV0aWxzLnRzIiwic3JjL2FwcC9hbmd1bGFyL2hpZ2hsaWdodGpzLWd1aWRlL2hpZ2hsaWdodGpzLWd1aWRlLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYW5ndWxhci9oaWdobGlnaHRqcy1ndWlkZS9oaWdobGlnaHRqcy1ndWlkZS5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2FwcC5jb21wb25lbnQnO1xuXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIGFwcENvbmZpZylcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZywgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZUh0dHBDbGllbnQsIHdpdGhGZXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBwcm92aWRlQW5pbWF0aW9uc0FzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL2FzeW5jJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW3Byb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLCBwcm92aWRlUm91dGVyKHJvdXRlcyksIHByb3ZpZGVBbmltYXRpb25zQXN5bmMoKSxcbiAgICBwcm92aWRlSHR0cENsaWVudCh3aXRoRmV0Y2goKSksXG4gIF1cbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IENhc291cmVsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2xpYi9jb21wb25lbnQvY2Fzb3VyZWwvY2Fzb3VyZWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICAgIGltcG9ydHM6IFtNYXRDYXJkTW9kdWxlLCBDYXNvdXJlbENvbXBvbmVudF0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxufVxuIiwiPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZmlyZVwiPkxldCByZWFkIG15IHN0b3JpZXM8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaW50cm9cIj5cbiAgICA8ZGl2PjwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxwPkFzIGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgITxiciAvPkdyZWF0IGV4cGVyaWVuY2Ugb24gLi4uPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJob21lL2phdmEud2VicFwiIHRpdGxlPVwiSmF2YVwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaG9tZS9zcHJpbmcud2VicFwiIHRpdGxlPVwiU3ByaW5nXCIvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJob21lL2FuZ3VsYXIud2VicFwiIHRpdGxlPVwiQW5ndWxhclwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaG9tZS9yZWFjdC53ZWJwXCIgdGl0bGU9XCJSZWFjdFwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaG9tZS9hd3Mud2VicFwiIHRpdGxlPVwiQVdTXCIvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJob21lL3BsYXl3cmlnaHQud2VicFwiIHRpdGxlPVwiUGxheXdyaWdodFwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaG9tZS9rNi53ZWJwXCIgdGl0bGU9XCJLNlwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaG9tZS9jaWNkLndlYnBcIiB0aXRsZT1cIkNJQ0RcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IHN0eWxlPVwid2lkdGg6IDYwMHB4OyBoZWlnaHQ6IDQwMHB4O21hcmdpbjowcHggYXV0b1wiPlxuICAgIDxhcHAtY2Fzb3VyZWw+PC9hcHAtY2Fzb3VyZWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJncmVldGluZ1wiPlxuICAgIDxpbWcgc3JjPVwiaG9tZS9zYXktaGkuZ2lmXCI+XG4gICAgPGRpdj5cbiAgICAgICAgPGgyPk5pY2UgdG8gTWVldCBZb3U8L2gyPlxuICAgICAgICA8cD5IaSwgTXkgbmFtZSdzIEFuaC4gSSdtIGZyb20gVmlldG5hbSBhbmQgeW91IGNhbiBjYWxsIG1lICdLcmlzJy4gVGhpcyBwbGFjZSB3aGVyZSBJIGNhbiBzaGFyZSBteSBncmVhdGVzdCBpbnNwaXJhdGlvbiBhbmQgY2FuZGlkbHkgZGlzcGxheSB0aGUgZGlmZmVyZW50IHNpZGVzIG9mIG15IHBhc3Npb24gcHJvamVjdC4gSSBpbnZpdGUgeW91IHRvIGV4cGxvcmUgbXkgY29udGVudCBhbmQgbGVhcm4gYWJvdXQgd2hhdCBtYWtlcyBtZSB0aWNrLiBQbGVhc2UgcmVhY2ggb3V0IGFuZCBlbmdhZ2XigJRJ4oCZbSBoYXBweSB0byBoZWFyIGZyb20geW91LCBhcyB3ZWxsLjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1hcFwiPjwvZGl2PiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jYXNvdXJlbCcsXG4gIGltcG9ydHM6IFtNYXRJY29uTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXNvdXJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jYXNvdXJlbC5jb21wb25lbnQuc2NzcycsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzd2FwJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgICB9KSxcblxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAncmlnaHQnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKSdcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJ1xuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdsZWZ0ID0+IGFjdGl2ZScsIFthbmltYXRlKCcwLjVzJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JpZ2h0ID0+IGFjdGl2ZScsIFthbmltYXRlKCcwLjVzJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBsZWZ0JywgW2FuaW1hdGUoJzAuNXMnKV0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IHJpZ2h0JywgW2FuaW1hdGUoJzAuNXMnKV0pLFxuICAgIF0pLFxuICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhc291cmVsQ29tcG9uZW50IHtcblxuICBzbGlkZXM6IGFueVtdID0gbmV3IEFycmF5KDMpLmZpbGwoeyBpZDogLTEsIHNyYzogJycsIHRpdGxlOiAnJywgc3VidGl0bGU6ICcnLCBjbGFzczogJycgfSk7XG4gIHNsaWRlOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZXNbMF0gPSB7XG4gICAgICBzcmM6ICdob21lL2FuZ3VsYXIud2VicCcsXG4gICAgICB0aXRsZTogJ0ZpcnN0IHNsaWRlJyxcbiAgICAgIHN1YnRpdGxlOiAnTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLicsXG4gICAgICBjbGFzczogJ2FjdGl2ZSdcbiAgICB9O1xuICAgIHRoaXMuc2xpZGVzWzFdID0ge1xuICAgICAgc3JjOiAnaG9tZS9yZWFjdC53ZWJwJyxcbiAgICAgIHRpdGxlOiAnU2Vjb25kIHNsaWRlJyxcbiAgICAgIHN1YnRpdGxlOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nLFxuICAgICAgY2xhc3M6ICd2b2lkJ1xuICAgIH07XG4gICAgdGhpcy5zbGlkZXNbMl0gPSB7XG4gICAgICBzcmM6ICdob21lL2phdmEud2VicCcsXG4gICAgICB0aXRsZTogJ1RoaXJkIHNsaWRlJyxcbiAgICAgIHN1YnRpdGxlOiAnUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyLicsXG4gICAgICBjbGFzczogJ3ZvaWQnXG4gICAgfTtcbiAgICB0aGlzLnNsaWRlID0gdGhpcy5zbGlkZXNbMF07XG4gIH1cbiAgcHJldigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zbGlkZXNbaV0uY2xhc3MgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHRoaXMuc2xpZGVzW2ldLmNsYXNzID0gJ2xlZnQnO1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc2xpZGVzW3RoaXMuc2xpZGVzLmxlbmd0aCAtIDFdLmNsYXNzID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNsaWRlc1tpIC0gMV0uY2xhc3MgPSAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZXh0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNsaWRlc1tpXS5jbGFzcyA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgdGhpcy5zbGlkZXNbaV0uY2xhc3MgPSAncmlnaHQnO1xuICAgICAgICBpZiAoaSArIDEgPT09IHRoaXMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2xpZGVzWzBdLmNsYXNzID0gJ2xlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2xpZGVzW2kgKyAxXS5jbGFzcyA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGV2ZW50LnBoYXNlTmFtZSA9PT0gJ2RvbmUnKSB7XG4gICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnYWN0aXZlJyAmJiBldmVudC50b1N0YXRlID09ICdyaWdodCcpIHtcbiAgICAgICAgdGhpcy5zbGlkZXNbaW5kZXhdLmNsYXNzID0gJ3ZvaWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAndm9pZCcgJiYgZXZlbnQudG9TdGF0ZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy5zbGlkZXNbaW5kZXhdLmNsYXNzID0gJ2FjdGl2ZSc7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuZnJvbVN0YXRlID09PSAnYWN0aXZlJyAmJiBldmVudC50b1N0YXRlID09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLnNsaWRlc1tpbmRleF0uY2xhc3MgPSAndm9pZCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICd2b2lkJyAmJiBldmVudC50b1N0YXRlID09ICdyaWdodCcpIHtcbiAgICAgICAgdGhpcy5zbGlkZXNbaW5kZXhdLmNsYXNzID0gJ2FjdGl2ZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAZm9yIChzbGlkZSBvZiBzbGlkZXM7IHRyYWNrICRpbmRleCkge1xuQGlmIChzbGlkZS5jbGFzcyE9PVwidm9pZFwiKXtcbjxkaXYgKEBzd2FwLmRvbmUpPVwib25Eb25lKCRldmVudCwgJGluZGV4KVwiIFtAc3dhcF09XCJzbGlkZS5jbGFzc1wiPlxuICAgIDxpbWcgW3NyY109XCJzbGlkZS5zcmNcIiBhbHQ9XCJ7eyBzbGlkZS50aXRsZSB9fVwiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiIGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPGgzPnt7c2xpZGUudGl0bGV9fTwvaDM+XG4gICAgICAgIDxwPnt7c2xpZGUuc3VidGl0bGV9fTwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxufVxufVxuXG48YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicHJldigpXCIgY2xhc3M9XCJsZWZ0LWFycm93XCI+XG4gICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuPC9idXR0b24+XG48YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwibmV4dCgpXCIgY2xhc3M9XCJyaWdodC1hcnJvd1wiPlxuICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG48L2J1dHRvbj4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIaWdobGlnaHREaXJlY3RpdmUgfSBmcm9tICdAYXBwL2xpYi9kaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jYXNvdXJlbC1ndWlkZScsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEhpZ2hsaWdodERpcmVjdGl2ZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXNvdXJlbC1ndWlkZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fzb3VyZWxHdWlkZUNvbXBvbmVudCB7XG59IiwiPHByZT5cbjxjb2RlIGFwcEhpZ2hsaWdodCB1cmw9XCJodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NlYWJpcmQ4Ni8zY2EzYjJjNTQwYWY2NzE5YzMyZTQzNzJkMWNjZmQ2Yi9yYXcvYWMwM2E5MzdlZWQ2NjZmYzM4NTExMzExYTg0YzM5NzRmOTM3MDI5MC9jYXNvdXJlbC5jb21wb25lbnQudHNcIiBjbGFzcz1cImxhbmd1YWdlLXR5cGVzY3JpcHRcIiBmcm9tTGluZT00IHRvTGluZT1cIjUwXCIgPjwvY29kZT5cblxuXG5odHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NlYWJpcmQ4Ni9iZTA1MjA0OWEwOTc0YmFiOWEwMWU1NmM4YjgzNzkxMC9yYXcvZDkxOWNiOTBkYmI3OTk5ZGI0M2RjYWMwMjcxYjVjOWNhOGVjNjQ0YS9oaWdobGlnaHQuZGlyZWN0aXZlLnRzXG48L3ByZT4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIGlucHV0LCBFbGVtZW50UmVmLCBTZWN1cml0eUNvbnRleHQsIE9uSW5pdCwgSW5qZWN0YWJsZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBITEpTQXBpIH0gZnJvbSAnaGlnaGxpZ2h0LmpzJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFwcC9saWIvdXRpbHMvc3RyaW5nLnV0aWxzJztcblxuaW50ZXJmYWNlIEhMSlNMaW5lTnVtYmVyIHtcbiAgbGluZU51bWJlcnNCbG9jayhlbDogSFRNTEVsZW1lbnQsIG9wdGlvbjoge1xuICAgIHNpbmdsZUxpbmU6IGJvb2xlYW4sXG4gICAgc3RhcnRGcm9tOiBudW1iZXJcbiAgfSk6IHZvaWQ7XG59XG5jb25zdCBobGpzOiBITEpTQXBpICYgSExKU0xpbmVOdW1iZXIgPSAod2luZG93IGFzIGFueSlbJ2hsanMnXTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBIaWdobGlnaHRdJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuaGxqc10nOiAndHJ1ZSdcbiAgfVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVybCA9IGlucHV0LnJlcXVpcmVkPHN0cmluZz4oKTtcbiAgZnJvbUxpbmUgPSBpbnB1dDxudW1iZXIsIHN0cmluZz4oMSwgeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KTtcbiAgdG9MaW5lID0gaW5wdXQ8bnVtYmVyLCBzdHJpbmc+KDAsIHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy51cmwoKSwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICBjb25zdCBmcm9tSW5kZXggPSAodGhpcy5mcm9tTGluZSgpID09IDEpID8gMCA6IFN0cmluZ1V0aWxzLmluZGV4T2YocmVzcCwgJ1xcbicsIHRoaXMuZnJvbUxpbmUoKSAtIDEpICsgMTtcbiAgICAgIGNvbnN0IHRvSW5kZXggPSAodGhpcy50b0xpbmUoKSAhPSAwKSA/IFN0cmluZ1V0aWxzLmluZGV4T2YocmVzcCwgJ1xcbicsIHRoaXMudG9MaW5lKCkpICsgMSA6IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNvZGUgPSByZXNwLnNsaWNlKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgdGhpcy5lc2NhcGVIdG1sKGNvZGUpKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGhsanMuaGlnaGxpZ2h0RWxlbWVudCh0aGlzLmVSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGhsanMubGluZU51bWJlcnNCbG9jayh0aGlzLmVSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgICAgIHNpbmdsZUxpbmU6IGZhbHNlLFxuICAgICAgICAgIHN0YXJ0RnJvbTogdGhpcy5mcm9tTGluZSgpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBlc2NhcGVIdG1sKHN0cjogc3RyaW5nKTpzdHJpbmd7XG4gICAgLy8gY29uc3QgbWFwID0ge1xuICAgIC8vICAgICAnJic6ICcmYW1wOycsXG4gICAgLy8gICAgICc8JzogJyZsdDsnLFxuICAgIC8vICAgICAnPic6ICcmZ3Q7JyxcbiAgICAvLyAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgLy8gICAgIFwiJ1wiOiAnJiMwMzk7J1xuICAgIC8vIH07XG4gICAgLy8gcmV0dXJuIHN0ci5yZXBsYWNlKC9bJjw+XCInXS9nLCBmdW5jdGlvbihtKSB7cmV0dXJuIG1hcFttXTt9KTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1smPD4nXCJdL2cseD0+JyYjJyt4LmNoYXJDb2RlQXQoMCkrJzsnKVxufVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcblxuICAgIHN0YXRpYyBpbmRleE9mKHN0cjogc3RyaW5nLCBzdWJTdHI6IHN0cmluZywgaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChzdWJTdHIsIGkpLmpvaW4oc3ViU3RyKS5sZW5ndGg7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhpZ2hsaWdodERpcmVjdGl2ZSB9IGZyb20gJ0BhcHAvbGliL2RpcmVjdGl2ZS9oaWdobGlnaHQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhpZ2hsaWdodGpzLWd1aWRlJyxcbiAgaW1wb3J0czogW0hpZ2hsaWdodERpcmVjdGl2ZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9oaWdobGlnaHRqcy1ndWlkZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0anNHdWlkZUNvbXBvbmVudCB7XG5cbn1cbiIsIjxkaXY+XG4gICAgPGgxIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlVzaW5nIGhpZ2hsaWdodGpzIGluIEFuZ3VsYXI8L2gxPlxuXG4gICAgPGgzPlB1cnBvc2U8L2gzPlxuICAgIDx1bD5cbiAgICA8bGk+QXMgYSBhbmd1bGFyIGRldmVsb3BlciwgaG93IHRvIGNyZWF0ZSBhIGRpcmVjdGl2ZSB0aGF0IHNob3dzIGEgY29kZSBzbmlwcGV0IG9uIGdpc3QgaW4gYW5ndWxhciBhcHBsaWNhdGlvbi4gSXQgc2hvdWxkIGhpZ2hsaWdodCBzeW50YXgsIGRpc3BsYXkgbGluZSBudW1iZXIgYW5kIGNvcHkgYnV0dG9uLiA8L2xpPlxuICAgIDxsaT5JIHRyaWVkIHRvIHVzZSB0aGUgcGFja2FnZSBuZ3gtaGlnaGxpZ2h0anMuIEJ1dCBJIGNhbm5vdCBhZGQgbW9yZSBwbHVnaW4gPGNvZGU+Y29weSBidXR0b248L2NvZGU+IGFuZCBjdXN0b21pemUgPGNvZGU+ZnJvbUxpbmU8L2NvZGU+IGFuZCA8Y29kZT50b0xpbmU8L2NvZGU+IGluIHRoaXMgbGlicmFyeS4gU28sIEkgZG9uJ3QgdXNlIGl0LjwvbGk+XG4gICAgPC91bD4gXG4gICAgPGgzPlJlc3VsdDwvaDM+XG5cbiAgICA8cHJlPlxuICAgICAgICA8Y29kZSBhcHBIaWdobGlnaHQgdXJsPVwiaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zZWFiaXJkODYvYmUwNTIwNDlhMDk3NGJhYjlhMDFlNTZjOGI4Mzc5MTAvcmF3L2Q5MTljYjkwZGJiNzk5OWRiNDNkY2FjMDI3MWI1YzljYThlYzY0NGEvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50c1wiIGNsYXNzPVwibGFuZ3VhZ2UtdHlwZXNjcmlwdFwiIGZyb21MaW5lPTQgdG9MaW5lPVwiMTBcIiA+PC9jb2RlPlxuICAgIDwvcHJlPlxuXG4gICAgPGgzPkhvdyB0byBkbzwvaDM+XG4gICAgPHVsPlxuICAgIDxsaT5BZGQgdGhlIGZvbGxvd2luZyBsaW5lcyBpbiB0aGUgc3JjL2luZGV4Lmh0bWw8L2xpPlxuICAgIDwvdWw+XG4gICAgPHByZT5cbiAgICAgICAgPGNvZGUgYXBwSGlnaGxpZ2h0IHVybD1cImh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vc2VhYmlyZDg2LzdmM2JhZjUxZjEzZDNhODUwMTI4OTM5OGE5ZWE2ZDBhL3Jhdy83ZDJhODllYmQ4ZmFlZDI2NzQzNjQxNWEwMzg2ZTI4ZTM0NmNiN2Y5L2hpZ2hsaWdodC1pbmRleC5odG1sXCIgY2xhc3M9XCJsYW5ndWFnZS14bWxcIiBmcm9tTGluZT0xNyB0b0xpbmU9XCIyNVwiPjwvY29kZT5cbiAgICA8L3ByZT5cbiAgICA8dWw+XG4gICAgICAgIDxsaT5Zb3UgbmVlZCB0byBhZGQgdGhlICYjNjA7c2NyaXB0JiM2MjsgdGhhdCBzdXBwb3J0cyB0aGUgbGFuZ3VhZ2UgeW91IHdvdWxkIGxpa2UgdG8gaGlnaGxpZ2h0LiBJbiBteSBleGFtcGxlLCBJIHVzZSB0eXBlc2NyaXB0Lm1pbi5qczwvbGk+XG4gICAgPC91bD5cbiAgICA8dWw+XG4gICAgICAgIDxsaT5JbnN0YWxsIDxjb2RlPmhpZ2hsaWdodGpzPC9jb2RlPiBwYWNrYWdlLiBXZSB3aWxsIG9ubHkgdXNlIHRoZSBUeXBlc2NyaXB0IGRlY2xhcmF0aW9uIGZpbGUgb2YgdGhpcyBwYWNrYWdlIGluIHRoZSBkaXJlY3RpdmUgZmlsZS48L2xpPlxuICAgIDwvdWw+XG4gICAgPHByZT5cbiAgICAgICAgPGNvZGU+bnBtIGluc3RhbGwgaGlnaGxpZ2h0LmpzPC9jb2RlPlxuICAgIDwvcHJlPlxuICAgIDx1bD5cbiAgICAgICAgPGxpPkNyZWF0ZSBhIGRpcmVjdGl2ZSBsaWtlIHRoZSBmb2xsb3dpbmcgY29kZTo8L2xpPlxuICAgIDwvdWw+XG4gICAgPHByZT5cbiAgICAgICAgPGNvZGUgYXBwSGlnaGxpZ2h0IHVybD1cImh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vc2VhYmlyZDg2L2JlMDUyMDQ5YTA5NzRiYWI5YTAxZTU2YzhiODM3OTEwL3Jhdy9kOTE5Y2I5MGRiYjc5OTlkYjQzZGNhYzAyNzFiNWM5Y2E4ZWM2NDRhL2hpZ2hsaWdodC5kaXJlY3RpdmUudHNcIiBjbGFzcz1cImxhbmd1YWdlLXR5cGVzY3JpcHRcIiA+PC9jb2RlPlxuICAgIDwvcHJlPlxuICAgIDx1bD5cbiAgICAgICAgPGxpPkluIHRoZSBkaXJlY3RpdmUgZmlsZSwgd2UgdXNlIHRoZSBmdW5jdGlvbiBgaGlnaGxpZ2h0RWxlbWVudGAgZm9yIHRoZSBgY29weSBidXR0b25gIGZlYXR1cmUgaW5zdGVhZCBvZiB1c2luZyB0aGUgZnVuY3Rpb24gYGhpZ2hsaWdodGAgYXMgaW4gdGhlIHBhY2thZ2Ugbmd4LWhpZ2hsaWdodGpzLjwvbGk+XG4gICAgPC91bD5cblxuICAgIDxoMz5SZWZlcmVuY2VzOjwvaDM+XG4gICAgPHA+PGk+VGhhbmtzIGZvciB0aGUgYXV0aG9ycyB3aG8gZGV2ZWxvcGVkIHRoZSBiZWxvdyBsaWJyYXJpZXMsIHB1Ymxpc2hlZCBhbmQgc2hhcmVkIHRvIGV2ZXJ5b25lLjwvaT48L3A+XG4gICAgPG9sPlxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9oaWdobGlnaHRqcy5vcmdcIj5odHRwczovL2hpZ2hsaWdodGpzLm9yZzwvYT48L2xpPlxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3djb2Rlci9oaWdobGlnaHRqcy1saW5lLW51bWJlcnMuanNcIj5odHRwczovL2dpdGh1Yi5jb20vd2NvZGVyL2hpZ2hsaWdodGpzLWxpbmUtbnVtYmVycy5qczwvYT48L2xpPlxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Fycm9uaHVudC9oaWdobGlnaHRqcy1jb3B5XCI+aHR0cHM6Ly9naXRodWIuY29tL2Fycm9uaHVudC9oaWdobGlnaHRqcy1jb3B5PC9hPjwvbGk+XG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTXVyaGFmU291c2xpL25neC1oaWdobGlnaHRqc1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9NdXJoYWZTb3VzbGkvbmd4LWhpZ2hsaWdodGpzPC9hPjwvbGk+XG4gICAgPC9vbD5cbjwvZGl2PiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnQGFwcC9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENhc291cmVsR3VpZGVDb21wb25lbnQgfSBmcm9tICdAYXBwL2FuZ3VsYXIvY2Fzb3VyZWwtZ3VpZGUvY2Fzb3VyZWwtZ3VpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IEhpZ2hsaWdodGpzR3VpZGVDb21wb25lbnQgfSBmcm9tICdAYXBwL2FuZ3VsYXIvaGlnaGxpZ2h0anMtZ3VpZGUvaGlnaGxpZ2h0anMtZ3VpZGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdhbmd1bGFyL2Nhc291cmVsLWd1aWRlJywgY29tcG9uZW50OiBDYXNvdXJlbEd1aWRlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnYW5ndWxhci9oaWdobGlnaHRqcy1ndWlkZScsIGNvbXBvbmVudDogSGlnaGxpZ2h0anNHdWlkZUNvbXBvbmVudCB9XG5dOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgaW1wb3J0czogW1JvdXRlck91dGxldCwgTWF0QnV0dG9uTW9kdWxlLCBNYXRNZW51TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBSb3V0ZXJMaW5rLCBNYXRUb29sYmFyTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hcHAuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ3Byb2ZpbGUnO1xufVxuIiwiPG1hdC10b29sYmFyPlxuICA8aW1nIHNyYz1cImhvbWUvYXZhdGFyMi5wbmdcIiAvPlxuICA8c3Bhbj5LcmlzPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCIvaG9tZVwiPjxtYXQtaWNvbiBmb250SWNvbj1cImhvbWVcIiAvPkhvbWU8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uPjxtYXQtaWNvbiBmb250SWNvbj1cImluZm9cIiAvPkFib3V0PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbj5cbiAgICA8bWF0LWljb24gZm9udEljb249XCJ3eXNpd3lnXCI+PC9tYXQtaWNvbj5cbiAgICBCbG9nXG4gIDwvYnV0dG9uPlxuPC9tYXQtdG9vbGJhcj5cbjxkaXY+XG4gIDxyb3V0ZXItb3V0bGV0IC8+XG48L2Rpdj5cbjxmb290ZXI+XG4gIDxwPjxhIGhyZWY9XCJtYWlsdG86c2VhYmlyZDg2QGdtYWlsLmNvbVwiPnNlYWJpcmQ4NiYjNjQ7Z21haWwuY29tPC9hPjwvcD5cbiAgPHA+JmNvcHk7MjAwMiBjcmVhdGVkIGJ5IEtyaXMgTmd1eWVuPC9wPlxuPC9mb290ZXI+Il0sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QixrQ0FBa0M7QUFDOUQsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxtQkFBbUIsaUJBQWlCOzs7QUNGN0MsU0FBUyxhQUFBQSxrQkFBaUI7QUFDMUIsU0FBUyxxQkFBcUI7OztBRUQ5QixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLFNBQVMsT0FBTyxPQUFPLFNBQVMsa0JBQWtDOzs7Ozs7O0FD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QSx3QkFBQSxJQUFBLFlBQUEsQ0FBQTtBQUNBLE1BQUEscUJBQUEsSUFBQSxRQUFBO0FBQ0YsTUFBQSwyQkFBQSxFQUFTO0FBRVgsTUFBQSw2QkFBQSxJQUFBLEtBQUE7QUFDRSxNQUFBLHdCQUFBLElBQUEsZUFBQTtBQUNGLE1BQUEsMkJBQUE7QUFDQSxNQUFBLDZCQUFBLElBQUEsUUFBQSxFQUFRLElBQUEsR0FBQSxFQUNILElBQUEsS0FBQSxDQUFBO0FBQXFDLE1BQUEscUJBQUEsSUFBQSxxQkFBQTtBQUF1QixNQUFBLDJCQUFBLEVBQUk7QUFDbkUsTUFBQSw2QkFBQSxJQUFBLEdBQUE7QUFBRyxNQUFBLHFCQUFBLElBQUEsaUNBQUE7QUFBaUMsTUFBQSwyQkFBQSxFQUFJOztvQkROOUIsY0FBY0Qsa0JBQWUsZUFBRSxlQUFlQyxnQkFBYSxhQUFFLFlBQVksa0JBQWdCLGVBQUUsZ0JBQWdCLEVBQUEsQ0FBQTs7O2lGQUkxRyxjQUFZLEVBQUEsV0FBQSxnQkFBQSxVQUFBLDRCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FiVnpCLHFCQUFxQixjQUFjLFNBQVMsRUFDekMsTUFBTSxDQUFDLFFBQVEsUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiLCJDb21wb25lbnQiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIl19