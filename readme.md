# Domain Event

## Componentes

- Event: O evento a ser disparado.
- Handler: Executa o processamento quando um evento é chamado.
- EventDispatcher: Responsável por armazenar e executar os handlers de um evento quando ele for disparado.

## Dinamica

- Criar um EventDispatcher
- Criar um Evento
- Criar um Handler para o Evento
- Registrar o Evento junto com o Handler no EventDispatcher
- Disparar um Evento usando o método notify do EventDispatcher (todos os handlers sao executados)