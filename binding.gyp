{
	"targets": [{
		"target_name": "iohook",
		"sources": ["src/iohook.cc"],
		"include_dirs": ["../nan", "node_modules/nan", "libuiohook/dist/include"],
		"libraries": ["-luiohook", "-lxkbfile", "-lxkbcommon-x11", "-lxkbcommon", "-lX11-xcb", "-lxcb", "-lXinerama", "-lXt", "-lXtst", "-lX11", "-L../libuiohook/dist/lib"]
	}]
}