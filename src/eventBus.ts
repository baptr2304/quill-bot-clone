import mitt from 'mitt';

// Define the event types as a record, where each property is an event name with a type of `undefined` for no data.
interface Events extends Record<string, undefined> {
  'toggleSidebar': undefined;
  [key: symbol]: unknown; // Add an index signature for symbols
}

export const EventBus = mitt<Events>();