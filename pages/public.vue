<template>
  <div class="public-page" v-once>
    <h1>My CV</h1>
    <section>
      <h2>Personal Info</h2>
      <p>Alexey Kulikov</p>
      <p>Email: kul1koff86@yandex.ru</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/akulikoff/"></a></p>
    </section>
    <section>
      <h2>Working Experience</h2>

      <h3>PEGAS Touristik</h3>
      <p>
        <strong>Frontend Developer (JavaScript, Vue)</strong> The project
        provides services for agent companies. Developed and maintained shared
        system components for agent companies, including progressive refactoring
        during the transition from jQuery to Vue.js. This transition
        significantly reduced development time for implementing new features,
        improved the user interface, and eliminated a significant portion of
        technical debt.
      </p>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>
          Actively participated in the key stage of transitioning the project
          from jQuery to Vue, transforming the site from a classical
          architecture to a single-page application (SPA). This transition
          greatly accelerated the development and implementation of new
          features, improved the user interface by reducing page loading time,
          and increased application responsiveness.
        </li>
        <li>
          Developed and implemented a range of components for displaying
          statistical data in graphical form using chart.js. This made it easier
          and more efficient to represent complex data
        </li>
        <li>
          Implemented a feature for custom marker placement on Yandex Maps,
          adding the ability to interact with them. This improved the user
          experience by making it easier for users to interact with the map and
          obtain more relevant information.
        </li>
        <li>
          As a result of the transition to the new stack and the implementation
          of new features, the technical debt of the project has been
          significantly reduced. This allowed for greater focus on further
          development and optimization of services, improving code quality, and
          reducing the likelihood of errors.
        </li>
      </ul>
      <p>
        <strong>Skills: </strong>Vue2, Nuxt.js, TypeScript, PHP (Laravel), vuex,
        vue-router, class-component, Jest, Webpack, Less, vuetify
      </p>
      <h3>Streamity</h3>
      <p>
        Startup that provides safe and fast services for exchanging
        cryptocurrencies for fiat money via smart contracts.
      </p>
      <ul>
        <li>
          Conducted deep optimization of the layout for specific parts of the
          project, eliminating the use of Bootstrap where it was used for
          styling. This reduced the file size of the styles, improved page
          loading performance, and enhanced the overall user experience by
          making the interface cleaner and more responsive
        </li>
        <li>
          Developed and implemented a cryptocurrency calculator that
          automatically updated realtime exchange rates. This improved the
          usability of the service for users by providing upto-date information
          on cryptocurrency rates without the need to refresh the page.
        </li>
        <li>
          Developed and implemented a range of Vue.js components, improving code
          modularity and reusability, which contributed to more efficient
          development and maintenance of the service.
        </li>
      </ul>
      <p>
        <strong>Skills: </strong>Vue2, PHP (Laravel), vuex, vue-router,
        Tailwind, Bootstrap, class-component, webpack
      </p>
    </section>
    <section>
      <h2>Education</h2>
      <ul>
        <li>
          Far Eastern State Technical University (V. V. Kuibyshev DVPI) in
          Vladivostok Specialist of Economics and management in the direction of
          "Crisis management" 2006 ― 2009
        </li>
        <li>
          Far Eastern State Technical University (V. V. Kuibyshev DVPI) in
          Vladivostok Specialist of social anthropology 2003 ― 2008
        </li>
      </ul>
    </section>
    <section>
      <h2>Skills</h2>
      <p>
        Gitlab CI Vue2 Nuxt.js TypeScript, vuex vue-router, class-component Jest
        Webpack Less, vuetify js OOP linux git html css Docker
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.public-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
