<template>
  <v-card color="secondary"
          dark>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline"
                      v-text="item.name"></v-card-title>

        <v-card-subtitle v-text="item.species"></v-card-subtitle>
        <v-card-subtitle v-text="item.origin.name"></v-card-subtitle>
      </div>

      <v-avatar class="ma-3"
                size="150"
                tile>
        <v-img v-if="item.image"
               :src="item.image"
               @click="play">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0"
                   align="center"
                   justify="center">
              <v-progress-circular indeterminate
                                   color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-avatar>
      <audio class="player"
             type="audio/wav"
             ref="audio">
        <source :src="soundSrc" />
      </audio>
    </div>
    <v-card-actions>
      <v-btn color="primary"
             @click="play">
        Say something
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api';

const sounds = {
  1: 'https://sound.peal.io/ps/audios/000/000/537/original/woo_vu_luvub_dub_dub.wav?1469744420',
  2: 'https://sound.peal.io/ps/audios/000/000/559/original/my_name_is_morty_smith.wav?1469744389',
  7: 'https://sound.peal.io/ps/audios/000/000/550/original/get_schwifty_in_here.wav?1469744423',
  16: 'https://sound.peal.io/ps/audios/000/000/739/original/ohmygod.mp3?1469744104',
  30: 'https://sound.peal.io/ps/audios/000/004/218/original/youtube.mp3?1507154761',
  34: 'https://sound.peal.io/ps/audios/000/000/554/original/you_can\'t_go_out_there.wav?1469744151',
  49: 'https://sound.peal.io/ps/audios/000/000/553/original/oh_man.wav?1469744452',
  55: 'https://sound.peal.io/ps/audios/000/000/556/original/hey_ya_you_doing_ok_.wav?1469744472',
  136: 'https://sound.peal.io/ps/audios/000/000/566/original/Gazorporfield.wav?1469744416',
  242: 'https://sound.peal.io/ps/audios/000/000/548/original/Hi_I\'m_mr_meeseeks_look_at_me.wav?1469744301',
  244: 'https://sound.peal.io/ps/audios/000/004/218/original/youtube.mp3?1507154761',
};

export default {
  name: 'RicketyCard',
  props: {
    item: {
      type: Object,
    },
  },
  setup() {
    const audio = ref(null);

    const play = () => {
      audio.value.play();
      setTimeout(() => {
        if (audio.value) audio.value.pause();
      }, 4000);
    };

    return { audio, play };
  },
  data() {
    return {};
  },
  computed: {
    soundSrc() {
      return sounds[this.item.id] || sounds[49];
    },
  },
  methods: {
    play() {
      this.$refs.audio.play();
      setTimeout(() => {
        if (this.$refs.audio) this.$refs.audio.pause();
      }, 4000);
    },
  },
};
</script>
