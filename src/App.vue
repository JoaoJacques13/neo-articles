<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Neo Artigos</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/articles">Artigos</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
