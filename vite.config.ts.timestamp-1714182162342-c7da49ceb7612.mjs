// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/vite@5.1.4_sass@1.71.1/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.4_vue@3.4.20/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.1.4_vue@3.4.20/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Pages from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/vite-plugin-pages@0.32.0_@vue+compiler-sfc@3.4.20_vite@5.1.4/node_modules/vite-plugin-pages/dist/index.js";
import Layouts from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.1.4_vue-router@4.3.0_vue@3.4.20/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import AutoImport from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.20/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/BapHocBai/SGroup/FrontEnd/SGROUP/vue%20high/vue_project/clone-quill-bot/Clone_Quill_Bot/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.20/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "D:\\BapHocBai\\SGroup\\FrontEnd\\SGROUP\\vue high\\vue_project\\clone-quill-bot\\Clone_Quill_Bot";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
    Layouts({
      layoutsDirs: "./src/layouts",
      pagesDirs: "./src/pages",
      defaultLayout: "default"
    }),
    Pages({
      dirs: "./src/pages"
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router"
      ],
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCYXBIb2NCYWlcXFxcU0dyb3VwXFxcXEZyb250RW5kXFxcXFNHUk9VUFxcXFx2dWUgaGlnaFxcXFx2dWVfcHJvamVjdFxcXFxjbG9uZS1xdWlsbC1ib3RcXFxcQ2xvbmVfUXVpbGxfQm90XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxCYXBIb2NCYWlcXFxcU0dyb3VwXFxcXEZyb250RW5kXFxcXFNHUk9VUFxcXFx2dWUgaGlnaFxcXFx2dWVfcHJvamVjdFxcXFxjbG9uZS1xdWlsbC1ib3RcXFxcQ2xvbmVfUXVpbGxfQm90XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9CYXBIb2NCYWkvU0dyb3VwL0Zyb250RW5kL1NHUk9VUC92dWUlMjBoaWdoL3Z1ZV9wcm9qZWN0L2Nsb25lLXF1aWxsLWJvdC9DbG9uZV9RdWlsbF9Cb3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5cclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlKCksXHJcbiAgICBWdWVKc3goKSxcclxuICAgIExheW91dHMoe1xyXG4gICAgICBsYXlvdXRzRGlyczogJy4vc3JjL2xheW91dHMnLFxyXG4gICAgICBwYWdlc0RpcnM6ICcuL3NyYy9wYWdlcycsXHJcbiAgICAgIGRlZmF1bHRMYXlvdXQ6ICdkZWZhdWx0JyxcclxuICAgIH0pLFxyXG4gICAgUGFnZXMoe1xyXG4gICAgICBkaXJzOiAnLi9zcmMvcGFnZXMnLFxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgXSxcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgXSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4YyxPQUFPLFVBQVU7QUFDL2QsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBVHBDLElBQU0sbUNBQW1DO0FBYXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxJQUNqQixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxNQUN0QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsTUFDdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
