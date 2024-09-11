import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    BlockStack,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  
  export default function Pricing() {
    return (
      <Page>
        <TitleBar title="Pricing" />
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="300">
                <Text as="p" variant="bodyMd">
                    <h5>This is Pricing page.</h5>
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  
  function Code({ children }) {
    return (
      <Box
        as="span"
        padding="025"
        paddingInlineStart="100"
        paddingInlineEnd="100"
        background="bg-surface-active"
        borderWidth="025"
        borderColor="border"
        borderRadius="100"
      >
        <code>{children}</code>
      </Box>
    );
  }
  