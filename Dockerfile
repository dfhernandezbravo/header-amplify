# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.18.0-alpine3.16

WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

ARG NEXT_PUBLIC_HOST_URL
ARG NEXT_PUBLIC_BFF_WEB_URL
ARG NEXT_PUBLIC_API_KEY_BFF_WEB
ARG NEXT_PUBLIC_VTEX_GRAPHQL

ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL
ENV NEXT_PUBLIC_BFF_WEB_URL=$NEXT_PUBLIC_BFF_WEB_URL
ENV NEXT_PUBLIC_API_KEY_BFF_WEB=$NEXT_PUBLIC_API_KEY_BFF_WEB
ENV NEXT_PUBLIC_VTEX_GRAPHQL=$NEXT_PUBLIC_VTEX_GRAPHQL

RUN echo "NEXT_PUBLIC_HOST_URL -- $NEXT_PUBLIC_HOST_URL"
RUN echo "NEXT_PUBLIC_BFF_WEB_URL -- $NEXT_PUBLIC_BFF_WEB_URL"
RUN echo "NEXT_PUBLIC_API_KEY_BFF_WEB -- $NEXT_PUBLIC_API_KEY_BFF_WEB"
RUN echo "NEXT_PUBLIC_VTEX_GRAPHQL -- $NEXT_PUBLIC_VTEX_GRAPHQL"

RUN NODE_ENV='' yarn install && \
yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8081
CMD [ "yarn", "start" , "-p", "8081"]

