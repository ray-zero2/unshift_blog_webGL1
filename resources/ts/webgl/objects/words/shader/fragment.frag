precision mediump float;

uniform sampler2D texture;
varying vec4 vColor;
varying vec2 vUv;

void main(){
  vec4 color = texture2D(texture, vUv) * vColor;
  if(color.a == 0.0) {
    discard;
  } else {
    gl_FragColor = color;
  }
}
