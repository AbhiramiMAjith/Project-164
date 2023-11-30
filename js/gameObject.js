AFRAME.registerComponent("wire-fence",{
    init : function(){
        posX = -100
        posZ = 10

        for (var i = 0; i < 4; i ++){
            var wireFence1 = document.createElement("a-entity")
            var wireFence2 = document.createElement("a-entity")
            var wireFence3 = document.createElement("a-entity")
            var wireFence4 = document.createElement("a-entity")

            posX = posX + 40
            posY = 2.5
            posZ = posZ - 30

            wireFence1.setAttribute("id", "wireFence1" + i)
            wireFence2.setAttribute("id", "wireFence2" + i)
            wireFence3.setAttribute("id", "wireFence3" + i)
            wireFence4.setAttribute("id", "wireFence4" + i)

            wireFence1.setAttribute ("position", { x: posX, y: 2.5, z: -40 })
            wireFence2.setAttribute ("position", { x: posX, y: 2.5, z: -50 })
            wireFence3.setAttribute ("position", { x: -40, y: 2.5, z: posZ })
            wireFence4.setAttribute ("position", { x: 30, y: 2.5, z: posZ })

            wireFence1.setAttribute("geometry", {primitive : "box", height : 10, width : 30, length : 10})
            wireFence2.setAttribute("geometry", {primitive : "box", height : 10, width : 30, length : 10})
            wireFence3.setAttribute("geometry", {primitive : "box", height : 10, width : 30, length : 10})
            wireFence4.setAttribute("geometry", {primitive : "box", height : 10, width : 30, length : 10})

            wireFence1.setAttribute("static-body",{})
            wireFence2.setAttribute("static-body",{})
            wireFence3.setAttribute("static-body",{})
            wireFence4.setAttribute("static-body",{})

            var scene = document.querySelector("#scene")
            scene.appendChild(wireFence1)
            scene.appendChild(wireFence2)
            scene.appendChild(wireFence3)
            scene.appendChild(wireFence4)
        }
    }
})