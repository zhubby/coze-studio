/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useLayoutEffect } from 'react';

import { useInjector } from '@coze-editor/editor/react';
import { languageSupport } from '@coze-editor/editor/preset-prompt';

// eslint-disable-next-line @typescript-eslint/naming-convention
function LanguageSupport() {
  const injector = useInjector();

  useLayoutEffect(() => injector.inject([languageSupport]), [injector]);

  return null;
}

export { LanguageSupport };
