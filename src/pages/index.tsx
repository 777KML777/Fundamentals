import Linha from "@/components/layout/Linha";
import Menu from "@/components/templates/Menu";
import MenuItem from "@/components/templates/MenuItem";
import Pagina from "@/components/templates/pagina";
import { IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconComponents, IconH1, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem
            icone={<IconSourceCode />}
            url="/hora.html"
            // icone={<IconSourceCode size={70} strokeWidth={1}/>}  Pode ser feito dessa maneira também.
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora (Estático)
          </MenuItem>

          <MenuItem
            icone={<IconSourceCode />}
            url="/horaAtual.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora com JS (Estático)
          </MenuItem>

          <MenuItem
            icone={<IconClock />}
            url="/api/hora"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora (Dinâmico)
          </MenuItem>
          <MenuItem
            icone={<IconTable />}
            url="/api/tabela?colunas=5&linhas=7"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Tabela (Dinâmico)
          </MenuItem>
          <MenuItem
            icone={<IconArrowsDiff />}
            url="/api/usuarios"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            API de usuários
          </MenuItem>
        </Linha>
        <Linha>
          <MenuItem
            icone={<IconComponents />}
            url="/examples/simples"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Componente Simples
          </MenuItem>
          <MenuItem
            icone={<IconH1 />}
            url="/examples/basico"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Componente Básico
          </MenuItem>
          <MenuItem
            icone={<IconClick />}
            url="/examples/evento"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Eventos
          </MenuItem>
          <MenuItem
            icone={<IconSitemap  />}
            url="/examples/filhos"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Filhos
          </MenuItem>
 
          <MenuItem
            icone={<IconArrowMoveDown  />}
            url="/examples/direta"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Comunicação Direta
          </MenuItem>
          <MenuItem
            icone={<IconArrowMoveUp  />}
            url="/examples/indireta"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Comunicação Indireta
          </MenuItem>
        </Linha>
      </Menu>
    </Pagina>
  )
}