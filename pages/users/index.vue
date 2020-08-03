<template>
  <v-layout>
    <v-flex class="pa-4">
      <UserSearch class="mb-4"/>
      <v-card class="rounded">
        <v-data-table
          :headers="headers"
          :items="users"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white rounded">
              <v-toolbar-title>Users</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >New Item</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field v-model="editedItem.nationalCode" label="National Code"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field v-model="editedItem.lastOrder" label="Last Order"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UserSearch from '~/components/users/search/UserSearch'
export default {
  components: {
    UserSearch
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { sortable: false, text: 'Phone', value: 'phone' },
        { sortable: false, text: 'Email', value: 'email' },
        { sortable: false, text: 'National Code', value: 'nationalCode' },
        { sortable: false, text: 'Last Order', value: 'lastOrder' },
        { sortable: false, text: 'Group', value: '' },
        { sortable: false, text: '', value: 'actions'},
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone: '',
        email: '',
        nationalCode: '',
        lastOrder: '',
      },
      defaultItem: {
        name: '',
        phone: '',
        email: '',
        nationalCode: '',
        lastOrder: '',
      },

    }
  },
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.users = [
          {
            name: 'Ali Taheri  ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 4.0,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 4.3,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 6.0,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 4.3,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 3.9,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 0.0,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 0,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 6.5,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 4.9,
          },
          {
            name: 'Ali Taheri ',
            phone: '09121234567',
            email: 'example@gmail.com',
            nationalCode: '0123456789',
            lastOrder: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.users.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>
