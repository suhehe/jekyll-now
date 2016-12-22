var bg, glow, long_shadow, long_shadow_b, switch_bot, switch_bot_border, switch_btn_bot, switch_btn_dark, switch_btn_light, switch_sign_green, switch_sign_red;

bg = new BackgroundLayer({
  style: {
    "background": "#c0bfce"
  },
  clip: true
});

glow = new Layer({
  parent: bg,
  x: Align.center,
  y: Align.center,
  width: 1200,
  height: 1200,
  opacity: 0.8,
  borderRadius: 2000
});

long_shadow = new Layer({
  parent: bg,
  x: Align.center,
  y: Align.center(+40),
  width: 374,
  height: 364,
  borderRadius: 58
});

switch_bot_border = new Layer({
  x: Align.center,
  y: Align.center,
  width: 374,
  height: 284,
  borderRadius: 56,
  backgroundColor: "#fff",
  shadowY: 8,
  shadowBlur: 14,
  shadowColor: "rgba(93, 58, 114, 0.6)",
  clip: true
});

switch_bot = new Layer({
  parent: switch_bot_border,
  x: Align.center,
  y: Align.center,
  width: 364,
  height: 274,
  borderRadius: 52,
  backgroundColor: "#e0e4e8",
  shadowY: 6,
  shadowBlur: 14,
  shadowColor: "rgba(204, 190, 213, 0.8)"
});

long_shadow_b = new Layer({
  parent: switch_bot,
  x: Align.center,
  y: Align.center(+20),
  width: 216,
  height: 188,
  borderRadius: 8
});

switch_btn_bot = new Layer({
  parent: switch_bot,
  x: Align.center,
  y: Align.center,
  width: 216,
  height: 148,
  borderRadius: 8,
  shadowY: 2,
  shadowBlur: 0,
  shadowColor: "rgba(255, 255, 255, 1)"
});

switch_btn_dark = new Layer({
  parent: switch_btn_bot,
  x: Align.center,
  y: Align.center,
  width: 216,
  height: 148,
  borderRadius: 8,
  borderColor: "#beadc8",
  borderWidth: 1,
  backgroundColor: "#dad1db",
  shadowY: 6,
  shadowBlur: 8,
  shadowColor: "rgba(250, 232, 218, 0.6)",
  clip: true
});

switch_btn_light = new Layer({
  parent: switch_btn_dark,
  x: Align.center,
  y: 4,
  width: 210,
  height: 122,
  borderRadius: 6,
  backgroundColor: "#e6e6e6",
  shadowY: 6,
  shadowBlur: 12,
  shadowColor: "rgba(204, 190, 213, 0.5)"
});

switch_sign_green = new Layer({
  parent: switch_btn_dark,
  x: Align.center,
  y: 135,
  width: 24,
  height: 4,
  borderRadius: 3,
  backgroundColor: "#66c89b"
});

switch_sign_red = new Layer({
  parent: switch_btn_dark,
  x: Align.center,
  y: 2,
  width: 24,
  height: 0,
  borderRadius: 3,
  backgroundColor: "#C57D92"
});

bg.animationOptions = {
  time: 1,
  curve: "ease-in-out"
};

bg.states.dark = {
  style: {
    "background": "linear-gradient( rgba(11, 61, 119, 1) 0%, rgba(115, 89, 146, 1) 95%)"
  }
};

bg.states["default"] = {
  style: {
    "background": "#c0bfce"
  }
};

glow.style = {
  "background": "radial-gradient( rgba(235, 235, 235,1) 0%, rgba(235, 235, 235,0) 60%)"
};

glow.states.dark = {
  style: {
    "background": "radial-gradient( rgba(114, 191, 192, 1) 0%, rgba(235, 235, 235,0) 60%)"
  }
};

glow.states["default"] = {
  style: {
    "background": "radial-gradient( rgba(235, 235, 235,1) 0%, rgba(235, 235, 235,0) 60%)"
  }
};

long_shadow.style = {
  "background": "linear-gradient( rgba(103, 55, 68, 0.6) 40%, rgba(103, 55, 68, 0) 95%)"
};

long_shadow.states.dark = {
  style: {
    "background": "linear-gradient( rgba(135, 78, 146, 1) 50%, rgba(63, 55, 108, 0) 95%)"
  }
};

long_shadow.states["default"] = {
  style: {
    "background": "linear-gradient( rgba(103, 55, 68, 0.6) 40%, rgba(103, 55, 68, 0) 95%)"
  }
};

switch_bot_border.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_bot_border.style = {
  "background": "linear-gradient( #fff 0%, #f1ceb3 100%)"
};

switch_bot_border.states.dark = {
  style: {
    "background": "linear-gradient( #98CEC7 0%, #425d96 20%, #425d96 50%, #884d93 100%)"
  },
  shadowColor: "rgba(73, 66, 119, 0.3)"
};

switch_bot_border.states["default"] = {
  style: {
    "background": "linear-gradient( #fff 0%, #f1ceb3 100%)"
  },
  shadowColor: "rgba(93, 58, 114, 0.6)"
};

switch_bot.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_bot.style = {
  "background": "linear-gradient( #e9edf1 0%, #e6e2ea 100%)"
};

switch_bot.states.dark = {
  shadowY: -6,
  shadowColor: "rgba(251, 183, 154, 0.2)",
  style: {
    "background": "linear-gradient( #557098 0%, #594d94 100%)"
  }
};

switch_bot.states["default"] = {
  shadowY: 6,
  shadowColor: "rgba(204, 190, 213, 0.8)",
  style: {
    "background": "linear-gradient( #e9edf1 0%, #e6e2ea 100%)"
  }
};

long_shadow_b.style = {
  "background": "linear-gradient( rgba(103, 55, 68, 0.3) 40%, rgba(103, 55, 68, 0) 95%)"
};

long_shadow_b.states.dark = {
  style: {
    "background": "linear-gradient( rgba(135, 78, 146, 1) 50%, rgba(63, 55, 108, 0) 95%)"
  }
};

long_shadow_b.states["default"] = {
  style: {
    "background": "linear-gradient( rgba(103, 55, 68, 0.3) 40%, rgba(103, 55, 68, 0) 95%)"
  }
};

switch_btn_bot.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_btn_bot.states.dark = {
  shadowColor: "#6E90AC"
};

switch_btn_dark.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_btn_dark.style = {
  "background": "linear-gradient( #fff 0%, #f1ceb3 100%)"
};

switch_btn_dark.states.dark = {
  shadowColor: "rgba(255, 255, 255, 0)",
  borderColor: "#20276b",
  style: {
    "background": "linear-gradient( #6784A4 0%, #a1bbdb 10%, #354e87 40%, #222360 95%, #884d93 100%)"
  }
};

switch_btn_dark.states["default"] = {
  shadowColor: "rgba(250, 232, 218, 0.6)",
  borderColor: "#beadc8",
  style: {
    "background": "linear-gradient( #fff 0%, #f1ceb3 100%)"
  }
};

switch_btn_light.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_btn_light.style = {
  "background": "linear-gradient( #e7e9f0 0%, #f7f7fe 100%)"
};

switch_btn_light.states.dark = {
  shadowY: -12,
  shadowBlur: 6,
  shadowColor: "rgba(171, 207, 160, 0.6)",
  style: {
    "background": "linear-gradient( #745994 0%, #4e4b81 20%, #585B96 100%)"
  },
  y: 20
};

switch_btn_light.states["default"] = {
  shadowY: 6,
  shadowBlur: 12,
  shadowColor: "rgba(204, 190, 213, 0.5)",
  style: {
    "background": "linear-gradient( #e7e9f0 0%, #f7f7fe 100%)"
  },
  y: 4
};

switch_sign_green.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_sign_green.states.dark = {
  height: 0,
  y: 146
};

switch_sign_red.animationOptions = {
  time: .05,
  curve: "ease-in-out"
};

switch_sign_red.states.dark = {
  height: 4,
  y: 7
};

switch_btn_light.onTap(function() {
  switch_bot_border.stateCycle();
  switch_bot.stateCycle();
  switch_btn_bot.stateCycle();
  switch_btn_dark.stateCycle();
  switch_btn_light.stateCycle();
  switch_sign_green.stateCycle();
  switch_sign_red.stateCycle();
  bg.stateCycle();
  long_shadow.stateCycle();
  long_shadow_b.stateCycle();
  return glow.stateCycle();
});
