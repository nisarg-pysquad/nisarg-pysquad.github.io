// skills Data
const skills = [
  { name: "Python", progress: "60" },
  { name: "Odoo Technical & Funtional", progress: "50" },
  { name: "FastAPI", progress: "50" },
  { name: "Flask", progress: "75" },
  { name: "Git", progress: "50" },
  { name: "JQuery", progress: "50" },
  { name: "React", progress: "50" },
  { name: "SQL", progress: "50" },
  { name: "Keras", progress: "50" },
  { name: "Docker", progress: "50" },
  { name: "Pytest", progress: "50" },
  { name: "LLM", progress: "50" },
  { name: "Aws", progress: "50" },
  { name: "Azure Functions", progress: "50" },
  { name: "ETL", progress: "50" },
  { name: "Numpy", progress: "50" },
  { name: "Pandas", progress: "60" },
  { name: "Sci-kit Learn", progress: "50" },
  { name: "Web Scraping", progress: "50" },
  { name: "Beautifulsoup", progress: "50" },
  { name: "Scrapy", progress: "50" },
  { name: "Elastic Search", progress: "50" },
  { name: "Redis", progress: "50" },
  { name: "Celery", progress: "50" },
  { name: "Tensorflow", progress: "50" },
  { name: "Dash", progress: "50" },
];

// projects data
const projectData = [
  {
    image: "assets/img/portfolio/N-Projects-1.png",
    url: "https://bharatnet.gujarat.gov.in/",
    alt: "GFGNL",
    details:
      "To provide quality and reliable network infrastructure to rural population by creating a world class optical fibre network , which shall be accessible to all and shall foster the economic growth of the region.",
    tech: "Python, Fast API, Numpy, Pandas, Sci-kit Learn, React.js, Postgresql ",
  },
  {
    image: "assets/img/portfolio/N-Project-2.png",
    url: "https://sciencecity.gujarat.gov.in/",
    alt: "Gujrat Council Of Science City",
    details:
      "Gujarat Science City is a bold initiative of the Government of Gujarat to realize this priority. The Government is creating a sprawling center at Ahmedabad which aims to provide a perfect blend of education and entertainment. It will showcase contemporary and imaginative exhibits, minds on experiences, working models, virtual reality, activity corners, labs and live demonstrations to provide an understanding of science and technology to the common man.",
    tech: "Python, Fast API, GCP, LLM, Vertex AI, Postgres, Firestore, Mongodb ",
  },

  {
    image: "assets/img/portfolio/N-Project-3.png",
    url: "",
    alt: "Herons Logistic",
    details:
      "Herons Logistics (I) Pvt Ltd was established in May 2011 by a group of Dynamic professionals having diverse in-depth knowledge and experience in Shipping and Logistics Industry. Within a short span of time HL has established itself as one of the operators to reckon within the Indian Trade.",
    tech: "",
  },

  {
    image: "assets/img/portfolio/N-project-4.png",
    url: "",
    alt: "Jeppiear University ",
    details:
      " (School Management) In the ever-evolving landscape of education, institutions that aim to provide innovative, affordable, and globally relevant learning opportunities stand out. Jeppiaar University, established in 2022 in Chennai, India, is one such institution that aspires to provide cutting-edge education to students from around the world, all while keeping costs accessible. The university is not just a recent addition to the education sector but is an extension of the visionary journey initiated by the late Dr. Jeppiaar, through the Jeppiaar Educational Trust in 1987.",
    tech: "",
  },

  {
    image: "assets/img/portfolio/N-project-5.png",
    url: "",
    alt: " yokohama university  ",
    details: "(Collage management)",
    tech: "",
  },

  {
    image: "assets/img/portfolio/N-project-6.png",
    url: "",
    alt: " DocVita One",
    details: "(Hospital management)",
    tech: "",
  },
];

/**
 * Template Name: iPortfolio - v1.2.1
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

!(function ($) {
  "use strict";

  // Hero typed
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
        }
        return false;
      }
    }
  });

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
})(jQuery);

// skills data
document.addEventListener("DOMContentLoaded", function () {
  // Populate skills
  skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("col-lg-6");
    skillElement.setAttribute("data-aos", "fade-up");
    skillElement.innerHTML = `
      <div class="progress">
        <span class="skill">${skill.name} <i class="val">${skill.progress}%</i></span>
        <div class="progress-bar-wrap">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="${skill.progress}"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: ${skill.progress}%"
          ></div>
        </div>
      </div>
    `;

    const skillsContent = document.querySelector(".skills-content");
    if (skillsContent) {
      skillsContent.appendChild(skillElement);
    }
  });

  projectData.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add(
      "col-lg-4",
      "col-md-6",
      "portfolio-item",
      "filter-web"
    );
    projectElement.innerHTML = `
      <div class="portfolio-wrap">
        <img
          src="${project.image}"
          class="w-100 portfolio-img-hw"
          alt="${project.alt}"
        />
        <div class="portfolio-links">
          <a
            href='${project.image}'
            data-gall="portfolioGallery"
            class="venobox"
            title="Poster"
          >
            <i class="bx bx-search"></i>
          </a>
          <a href="#" class="more-details-link" data-index="${index}" title="More Details">
            <i class="bx bx-link"></i>
          </a>
        </div>
      </div>
    `;
    const portfoliocontainer = document.querySelector(".portfolio-container");

    portfoliocontainer.appendChild(projectElement);
  });

  const modal = document.getElementById("project-modal");
  const modalLabel = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalTech = document.getElementById("tech");
  const modalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".more-details-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const index = this.getAttribute("data-index");
      const project = projectData[index];

      modalLabel.textContent = project.alt;
      modalDetails.textContent = project.details;
      // modalTech.textContent = project.tech;

      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
