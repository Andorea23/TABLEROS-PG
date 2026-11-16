# Tableros comerciales P&G

Pantalla de inicio que enlaza los tableros de Redención de Promociones, Incentivos y Cuentas Top y Surte y Gana.

## Archivos
- `index.html`: la pantalla de inicio. No hace falta editarla.
- `config.js`: **el único archivo que se edita**: periodo, links, estado de cada tablero y textos.
- `img/`: logos de P&G y Vega.

## Publicar en GitHub Pages (una sola vez)
1. Crea un repositorio nuevo en GitHub (por ejemplo `tableros-pg`).
2. En el repositorio: **Add file › Upload files**, arrastra `index.html`, `config.js`, `README.md` y la carpeta `img`. Luego **Commit changes**.
3. Ve a **Settings › Pages**. En **Source** elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
4. En uno o dos minutos aparece el link: `https://TU-USUARIO.github.io/tableros-pg/`

## Cambiar un link, el periodo o el estado de un tablero
1. Abre `config.js` en GitHub y presiona el lápiz (**Edit this file**).
2. Cambia lo que necesites:
   - `periodo: "DIC'26"`
   - `link: "https://claude.ai/artifact/..."`
   - `estado: "activo"` o `estado: "construccion"`
3. Presiona **Commit changes**. La página se actualiza en uno o dos minutos con el mismo link.

Respeta las comillas y las comas al final de cada línea. Si algo queda mal escrito, la página muestra un aviso en rojo.
