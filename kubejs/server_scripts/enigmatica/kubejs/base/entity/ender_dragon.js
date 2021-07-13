onEvent('entity.death', event => { 
    if (event.entity.type == 'minecraft:ender_dragon'){
      event.server.scheduleInTicks(700, event.server, function (callback) { 
      callback.server.runCommandSilent('execute in minecraft:the_end run setblock 0 64 -1 minecraft:dragon_head replace')})}
})