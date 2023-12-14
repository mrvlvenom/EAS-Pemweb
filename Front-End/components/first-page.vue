<template>
  <div
    class="h-screen w-full md:grid md:grid-cols-3 flex flex-col justify-center items-center"
  >
    <div
      class="hidden md:block relative md:col-span-2 bg-[url('/firstpage-img.jpg')] bg-cover"
    >
      <div class="bg-[#002864d2] w-full h-screen p-20">
        <!-- company logo -->
        <div class="z-40 bg-white inline-block p-3 text-[#333]">
        </div>

        <!-- text -->
        <div class="z-40">
          <h2 class="large-header leading-[60px] mt-4">EAS PEMROGRAMAN WEB</h2>
          <h4 class="medium-header mt-5">M. Januar Eko Wicaksono</h4>
          <br />
          <p class="w-8/12">
            5027221006
            <br />
            <br />
            Kelas PEMWEB A
            <br />
            <br />
            Daftarlah Lomba 17 Agustus 1945 disini
          </p>
          <br />
          <br />
          <br />
          <div class="flex items-center justify-between">
            <icon class="text-[40px]" name="uil:credit-card" />
            <icon class="w-10/12" name="uil:arrows-h" />
            <icon class="text-[40px]" name="uil:padlock" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center gap-4">
      <div
        class="z-40 rounded-md mb-20 bg-white text-[#333] inline-block p-3 md:hidden"
      >
        <img src="" alt="company-logo" />
      </div>
      <NuxtLink to="/signUpPage">
        <button class="login-btn">Registration</button>
      </NuxtLink>
      <NuxtLink to="/check-emailPage">
        <button class="login-btn">Check-Email</button>
      </NuxtLink>
    </div>
  </div>
</template>