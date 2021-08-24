//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { plugin } from '@anticrm/platform'
import type { Plugin } from '@anticrm/platform'
import type { Doc, Ref, Class } from '@anticrm/core'

/**
 * @public
 */
export interface Contact extends Doc {
}

/**
 * @public
 */
export interface Person extends Contact {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
}

/**
 * @public
 */
export interface Organization extends Contact {
  name: string
}

/**
 * @public
 */
export interface Employee extends Person {

}

/**
 * @public
 */
export const contactId = 'contact' as Plugin

export default plugin(contactId, {
  class: {
    Contact: '' as Ref<Class<Contact>>,
    Person: '' as Ref<Class<Person>>,
    Organization: '' as Ref<Class<Organization>>,
    Employee: '' as Ref<Class<Employee>>
  }
})
