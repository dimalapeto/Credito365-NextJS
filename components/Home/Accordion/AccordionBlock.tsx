'use client';
import { useState } from 'react';
import { Box, Stack, Collapse, Typography, Button } from '@mui/material';
import * as S from './style';

export const AccordionBlock = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box component="section" sx={S.container}>
      <Stack sx={S.blockLayout}>
        <Box>
          <Typography component="h3" sx={S.header}>
            ¿Por qué elegir Credito+365?
          </Typography>
          <Typography lineHeight="21px">
            Nuestro principal objetivo es hacer que el proceso de obtención de microcréditos sea cada vez más fácil para
            usted que nunca! Con la ayuda de avanzadas tecnologías, hemos simplificado el proceso de obtención de un
            microcrédito, y cada día seguimos haciéndolo aún más rápido y cómodo.
          </Typography>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={S.collapsedText}>
          <Typography lineHeight="21px" marginBottom="16px">
            Con nosotros puedes conseguir un microcrédito sin moverte de casa, dedicando tan solo{' '}
            <strong>5 minutos</strong>
          </Typography>
          <Typography lineHeight="21px" marginBottom="16px">
            ¡Un par de pasos simples, y usted está en la meta!
          </Typography>
          <Typography lineHeight="21px">
            Si tienes alguna pregunta, nuestro equipo de soporte estará encantado de ayudarte.
          </Typography>
        </Collapse>
        <Typography onClick={() => setExpanded((prev) => !prev)} sx={S.collapseBtn}>
          {expanded ? 'Ocultar' : 'Mostrar'}
        </Typography>
      </Stack>
    </Box>
  );
};
