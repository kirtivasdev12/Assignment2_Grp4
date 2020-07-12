var project = {
   compositions : [
   {
      id: '40',
      aspect: 1.777778,
      color: 'rgba(0, 0, 0, 255)',
      duration: 30000,
      objects : [
      {
         id: "49",
         type: 1002,
         start: 0,
         stop: 8000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0, value: [ -0.001232, 0.007389] } ],
            scale: [ { time:0, value: [ 4.070373, 4.103526] } ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.000781,0.000000,0.000000,0.000781,-0.218750,-0.123047],
      },
      {
         id: "44",
         type: 1002,
         start: 0,
         stop: 8000,
         opacity: [ { time:0, value: [ 1.000000] } ],
         transform: {
            anchor: [ { time:0, value: [ 0.000000, 0.000000] } ],
            position: [ { time:0.000000, value:[ -0.451834, 0.002463], cp2: { time: 5.500000, value: [ 0.000000, -0.007389] } }, { time:33.000000, value:[ -0.451834, -0.022167], cp1: { time: -5.500000, value: [ -0.079433, 0.003695] }, cp2: { time: 1383.333333, value: [ 0.079433, -0.003695] } }, { time:8333.000000, value:[ 0.501368, -0.022167], cp1: { time: -1383.333333, value: [ -0.158867, 0.000000] }, },  ],
            scale: [ { time:0, value: [ 1.311166, 1.492611] } ],
            rotation: [ { time:0, value: [ 0.000000] } ],
         },
         sourceMatrix: [0.001389,0.000000,0.000000,0.001389,-0.333333,-0.333333],
      },
      ]
   },
   ],
   active: function() { return this.compositions[0]; },
   width: 1280,
   height: 720,
   loops: 3700
}
