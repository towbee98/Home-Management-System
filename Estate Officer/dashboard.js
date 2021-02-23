const tenant_landlord_CTA = document.querySelector(".tenant-landlord");
const tenant_lord_CTA = document.querySelector(".tenant-and-lords");
const tenantDropdown = document.querySelector(".tenant-dropdown");
const tenantAndOwnerDropdown = document.querySelector(
  ".tenant-and-homeOwners-options"
);

const userProfile = document.querySelector(".user-profile");
const profile_img = document.querySelector(".image");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBar1 = document.querySelector(".line-1");
const toggleBar2 = document.querySelector(".line-2");
const toggleBar3 = document.querySelector(".line-3");
const mainNav = document.querySelector(".main-nav");
const ctx = document.querySelector("#revenueChart");

let click = 0;
if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    if (click % 2 == 0) {
      mainNav.style.left = "0";
      toggleBar1.style.opacity = "0";
      toggleBar2.style.transform = "rotateZ(45deg) translateX(6px)";
      toggleBar3.style.transform =
        "rotateZ(-45deg) translateX(4px) translateY(2px)";
    } else {
      mainNav.style.left = "-300px";
      toggleBar1.style.opacity = "1";
      toggleBar2.style.transform = "rotateZ(0) translateX(0)";
      toggleBar3.style.transform = "rotateZ(0) translateX(0) translateY(0)";
    }
    click++;
  });
  mainNav.addEventListener("click", function (event) {
    if (
      event.target.innerText === mainNav.children[0].innerText ||
      event.target.innerText === mainNav.children[1].children[0].innerText ||
      event.target.innerText === mainNav.children[1].children[2].innerText
    ) {
      click++;
      mainNav.style.left = "-300px";
      toggleBar1.style.opacity = "1";
      toggleBar2.style.transform = "rotateZ(0) translateX(0)";
      toggleBar3.style.transform = "rotateZ(0) translateX(0) translateY(0)";
    }

    for (let j = 0; j < tenantAndOwnerDropdown.children.length; j++) {
      if (
        event.target.textContent ===
        tenantAndOwnerDropdown.children[j].textContent
      ) {
        click++;
        mainNav.style.left = "-300px";
        toggleBar1.style.opacity = "1";
        toggleBar2.style.transform = "rotateZ(0) translateX(0)";
        toggleBar3.style.transform = "rotateZ(0) translateX(0) translateY(0)";
      }
    }
  }),
    true;
}

tenant_landlord_CTA.addEventListener("click", () => {
  tenantDropdown.classList.toggle("others");
});
tenant_lord_CTA.addEventListener("click", () => {
  tenantAndOwnerDropdown.classList.toggle("others");
});
profile_img.addEventListener("click", () => {
  userProfile.classList.toggle("others");
});

// const myChart = new Chart(ctx, {
//   type: "doughnut",
//   data: data,
//   options: options,
// });
var options = {
  series: [
    {
      name: "Rent Collected",
      data: [28000, 29000, 33000, 36000, 32000, 32000, 30000],
    },
    {
      name: "Expenses",
      data: [12000, 11000, 14000, 18000, 17000, 13000, 13000],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#007700", "#77B6EA"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Total Revenue",
    align: "left",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: [0, 11, 13, 14, 16, 18, 20],
    title: {
      text: "Year",
    },
  },
  yaxis: {
    title: {
      text: "Amount(Naira)",
    },
    min: 1000,
    max: 40000,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
};

var chart = new ApexCharts(document.querySelector("#revenueChart"), options);
chart.render();
