<template>
  <svg
    class="small-logo"
    width="70"
    height="42"
    viewBox="0 0 70 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M40.1899 30.4552H50.728C52.3381 30.4552 53.6321 31.7737 53.6003 33.3814L53.5586 38.6651C53.5022 41.6036 57.3107 42.7235 58.8301 40.2066L69.5177 22.5099C70.052 21.6277 70.0691 20.5273 69.5692 19.6279L59.7761 2.03165C58.3351 -0.558772 54.3943 0.463182 54.3943 3.42856V8.66087C54.3943 9.4402 54.0757 10.1852 53.5145 10.7268L38.195 25.5145C36.3349 27.3109 37.6068 30.4552 40.1899 30.4552ZM30.1198 11.695H19.5817C17.974 11.695 16.6776 10.3765 16.7095 8.77125L16.7511 3.48748C16.8075 0.549058 12.9991 -0.570924 11.4796 1.94597L0.79198 19.6427C0.260172 20.5249 0.238115 21.6253 0.740514 22.5247L10.5336 40.121C11.9746 42.7114 15.9179 41.6894 15.9179 38.724V33.4917C15.9179 32.7124 16.234 31.9649 16.7952 31.4233L32.1147 16.6356C33.9748 14.8393 32.7029 11.695 30.1198 11.695Z"
      fill="url(#paint1_linear_50_131)"
    />
    <defs>
      <linearGradient
        id="paint1_linear_50_131"
        x1="-5.8348e-07"
        y1="8.00001"
        x2="66.7643"
        y2="64.1091"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.314762" stop-color="#EF426F" />
        <stop offset="1" stop-color="#F0F179" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  setup() {}
}
</script>

<style lang="scss" scoped>
.small-logo {
  filter: grayscale(0);
  opacity: 1;
  animation: fadeInOut 2s ease-in-out infinite;
}

@keyframes fadeInOut {
  15%,
  100% {
    opacity: 1;
    filter: grayscale(0);
  }
  66% {
    opacity: 0.2;
    filter: grayscale(100%);
  }
}
</style>
