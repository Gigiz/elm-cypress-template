module Main exposing (main)

import Browser exposing (Document)
import Html exposing (Html, text)
import Html.Attributes exposing (..)

type alias Model = {}

view : Model -> Document Msg
view model = 
  { title = "Elm Boilerplate"
  , body = [ text "Hello World!" ]
  }

type Msg = NothingYet

update : Msg -> Model -> (Model, Cmd Msg)
update msg model = (model, Cmd.none)

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none

main : Program () Model Msg
main =
  Browser.document
    {
      init = \_ -> ({}, Cmd.none),
      subscriptions = subscriptions,
      update = update,
      view = view
    }