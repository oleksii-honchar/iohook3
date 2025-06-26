{
	"targets": [
		{
			"target_name": "iohook",
			"sources": [
				"src/iohook.cc"
			],
			"include_dirs": [
				"<!(node -e \"require('nan')\")",
				"libuiohook/dist/include"
			],
			"link_settings": {
				"libraries": [
					"-framework Carbon",
					"-framework CoreFoundation",
					"<(module_root_dir)/libuiohook/dist/lib/libuiohook.a"
				]
			},
			"xcode_settings": {
				"GCC_ENABLE_CPP_EXCEPTIONS": "YES",
				"OTHER_CPLUSPLUSFLAGS": [
					"-std=c++20",
					"-stdlib=libc++"
				]
			}
		}
	]
}