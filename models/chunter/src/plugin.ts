//
// Copyright © 2020 Anticrm Platform Contributors.
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

import type { TxViewlet } from '@anticrm/activity'
import { Channel, chunterId } from '@anticrm/chunter'
import chunter from '@anticrm/chunter-resources/src/plugin'
import type { Doc, Ref } from '@anticrm/core'
import type { IntlString, Resource } from '@anticrm/platform'
import { mergeIds } from '@anticrm/platform'
import type { AnyComponent } from '@anticrm/ui'
import type { Action, ViewletDescriptor } from '@anticrm/view'

export default mergeIds(chunterId, chunter, {
  component: {
    CommentPresenter: '' as AnyComponent,
    ChannelPresenter: '' as AnyComponent,
    ThreadView: '' as AnyComponent
  },
  action: {
    MarkCommentUnread: '' as Ref<Action>,
    MarkUnread: '' as Ref<Action>
  },
  actionImpl: {
    MarkUnread: '' as Resource<(object: Doc) => Promise<void>>,
    MarkCommentUnread: '' as Resource<(object: Doc) => Promise<void>>
  },
  string: {
    ApplicationLabelChunter: '' as IntlString,
    LeftComment: '' as IntlString,
    MentionedIn: '' as IntlString,
    Content: '' as IntlString,
    Comment: '' as IntlString,
    Message: '' as IntlString,
    Reference: '' as IntlString,
    Chat: '' as IntlString,
    CreateBy: '' as IntlString,
    Create: '' as IntlString,
    MarkUnread: '' as IntlString,
    LastMessage: '' as IntlString
  },
  viewlet: {
    Chat: '' as Ref<ViewletDescriptor>
  },
  ids: {
    TxCommentCreate: '' as Ref<TxViewlet>,
    TxCommentRemove: '' as Ref<TxViewlet>,
    TxBacklinkRemove: '' as Ref<TxViewlet>
  },
  activity: {
    TxCommentCreate: '' as AnyComponent,
    TxBacklinkCreate: '' as AnyComponent,
    TxBacklinkReference: '' as AnyComponent
  },
  space: {
    General: '' as Ref<Channel>,
    Random: '' as Ref<Channel>
  }
})
