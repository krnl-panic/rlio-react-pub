import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import express from "express";
import getHtml from "./html/html";
import path from "path";
import App from "../client/App/App";
import { ChunkExtractor, ChunkExtractorManager as _ChunkExtractorManager, ChunkExtractorManagerProps as _ChunkExtractorManagerProps } from "@loadable/server";
import { ServerStyleSheet } from "styled-components";


interface ChunkExtractorManagerProps extends _ChunkExtractorManagerProps {
  children?: React.ReactElement
}

export default (req: express.Request) => {
  const sheet = new ServerStyleSheet();
  const loadableJson = path.resolve(__dirname, "./loadable-stats.json");

  const extractor = new ChunkExtractor({
    statsFile: loadableJson,
    entrypoints: ["client"],
  });

  const ChunkExtractorManager = _ChunkExtractorManager as React.ComponentType<ChunkExtractorManagerProps>

  const content = renderToString(
    sheet.collectStyles(
      <ChunkExtractorManager extractor={extractor}>
        <StaticRouter location={req.path}>
          <App />
        </StaticRouter>
      </ChunkExtractorManager>
    )
  );

  const styles = sheet.getStyleTags();

  const htmlData: any = {
    styles,
    children: content,
    extractor,
  };

  const html = getHtml(htmlData);

  return html;
};
