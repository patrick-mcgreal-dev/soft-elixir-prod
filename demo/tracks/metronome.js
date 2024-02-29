const Q = Number.NaN;

export default {
  bpm: 120,
  samples: [ 
    { id: "wood.wav", data: [0, Q, Q, Q] }, 
    { id: "kick.wav", data: [1, Q, Q, Q] }, 
    { id: "snare.wav", data: [2, Q, Q, Q] }, 
    { id: "hh.wav", data: [3, Q, Q, Q] }, 
    { id: "synth.wav", data: [4, Q, Q, Q] }, 
    { id: "mono.wav", data: [5, Q, Q, Q] }, 
  ],
  instruments: {
    sample: {
      fn: "sample"
    },
  },
  patterns: [
    {
      id: 0,
      dur: [4],
      data: {
        name: "perc",
        def: "sample"
      },
      events: [
        // { time: [1,1], data: [ 1, 48, 10, 5 ] },
        // { time: [2,1], data: [ 1, 48, 10, 5 ] },
        // { time: [3,1], data: [ 2, 48, 10, 5 ] },
        // { time: [4,1], data: [ 1, 48, 10, 5 ] },
      ]
    },
    {
      id: 1,
      dur: [4],
      data: {
        name: "hh",
        def: "sample"
      },
      events: [
        { time: [1,1], data: [ 3, 48, 10, 5 ] },
        { time: [1,3], data: [ 3, 48, 10, 5 ] },
        { time: [2,1], data: [ 3, 48, 40, 5 ] },
        { time: [2,3], data: [ 3, 48, 10, 5 ] },
        { time: [3,1], data: [ 3, 48, 10, 5 ] },
        { time: [3,3], data: [ 3, 48, 10, 5 ] },
        { time: [4,1], data: [ 3, 48, 40, 5 ] },
        { time: [4,3], data: [ 3, 48, 10, 5 ] },
      ]
    },
    {
      id: 2,
      dur: [4],
      data: {
        name: "bass",
        def: "sample"
      },
      events: [
        // { time: [1,2], data: [ 4, 26, 20, 5 ] },
      ]
    },
    {
      id: 3,
      dur: [4],
      data: {
        name: "cowbell",
        def: "sample"
      },
      events: [
        { time: [1,1], data: [ 4, 39, 6, 5 ] },
        { time: [1,2], data: [ 4, 42, 6, 5 ] },
        { time: [1,3], data: [ 4, 44, 6, 5 ] },
        { time: [1,4], data: [ 4, 42, 6, 5 ] },
        // { time: [1,1], data: [ 0, 32, 1, 5 ] },
        // { time: [1,2], data: [ 0, 32, 6, 5 ] },
        // { time: [1,3], data: [ 0, 32, 1, 5 ] },
        // { time: [1,4], data: [ 0, 32, 1, 5 ] },
        // { time: [2,1], data: [ 0, 32, 6, 5 ] },
        // { time: [2,2], data: [ 0, 32, 1, 5 ] },
        // { time: [2,3], data: [ 0, 32, 1, 5 ] },
        // { time: [2,4], data: [ 0, 32, 6, 5 ] },
        // { time: [3,1], data: [ 0, 32, 1, 5 ] },
        // { time: [3,2], data: [ 0, 32, 1, 5 ] },
        // { time: [3,3], data: [ 0, 32, 6, 5 ] },
        // { time: [3,4], data: [ 0, 32, 1, 5 ] },
        // { time: [4,1], data: [ 0, 32, 1, 5 ] },
        // { time: [4,2], data: [ 0, 32, 1, 5 ] },
        // { time: [4,3], data: [ 0, 32, 4, 5 ] },
        // { time: [4,4], data: [ 0, 32, 6, 5 ] },
      ]
    },
  ],
  sequences: [
    {
      id: 0,
      steps: [
        { ticks: 16, patterns: [ 0, 1, 2, 3 ] },
        { ticks: 16, patterns: [ Q, Q, Q, 3 ] },
      ],
    }
  ],
}