<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title class="ml-4">Neo Artigos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="mr-2">
        <v-icon left>mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn text to="/articles">
        <v-icon left>mdi-book-open-page-variant</v-icon>
        Artigos
      </v-btn>
    </v-app-bar>

    <v-main class="app-background-gradient">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
  .app-background-gradient {
    background: linear-gradient(to bottom right, #000000, #2c3e50);    
  }
</style>