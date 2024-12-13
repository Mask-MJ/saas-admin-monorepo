<script lang="ts" setup>
import type { DropdownMenuProps } from '@saas-core/shadcn-ui';

import { ChevronDown } from '@saas-core/icons';
import { SaasDropdownMenu } from '@saas-core/shadcn-ui';

defineProps<DropdownMenuProps>();
</script>

<template>
  <SaasDropdownMenu :menus="menus" :modal="false">
    <div
      class="flex-center hover:bg-muted hover:text-foreground text-muted-foreground border-border h-full cursor-pointer border-l px-2 text-lg font-semibold"
    >
      <ChevronDown class="size-4" />
    </div>
  </SaasDropdownMenu>
</template>
