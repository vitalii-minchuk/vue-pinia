<template>
  <div>
    <div class="toolbox">
      <button @click="updateFirstRow">Update first row</button>
      <button @click="changeZoomLevel">Change zoom level</button>
    </div>
    <div class="gstc-wrapper" ref="gstcElement"></div>
  </div>
</template>

<script>
import GSTC from 'gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js';
import { Plugin as TimelinePointer } from 'gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js';
import { Plugin as Selection } from 'gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js';
import { Plugin as ItemResizing } from 'gantt-schedule-timeline-calendar/dist/plugins/item-resizing.esm.min.js';
import { Plugin as ItemMovement } from 'gantt-schedule-timeline-calendar/dist/plugins/item-movement.esm.min.js';
import { Plugin as Bookmarks } from 'gantt-schedule-timeline-calendar/dist/plugins/time-bookmarks.esm.min.js';
import 'gantt-schedule-timeline-calendar/dist/style.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';
// helper functions
function generateRows() {
  /**
   * @type { import("gantt-schedule-timeline-calendar").Rows }
   */
  const rows = {};
  for (let i = 0; i < 100; i++) {
    const id = GSTC.api.GSTCID(i.toString());
    rows[id] = {
      id,
      label: `Row ${i}`,
    };
  }
  return rows;
}
function generateItems() {
  /**
   * @type { import("gantt-schedule-timeline-calendar").Items }
   */
  const items = {};
  let start = GSTC.api.date().startOf('day').subtract(6, 'day');
  for (let i = 0; i < 100; i++) {
    const id = GSTC.api.GSTCID(i.toString());
    const rowId = GSTC.api.GSTCID(Math.floor(Math.random() * 100).toString());
    start = start.add(1, 'day');
    items[id] = {
      id,
      label: `Item ${i}`,
      rowId,
      time: {
        start: start.valueOf(),
        end: start.add(1, 'day').endOf('day').valueOf(),
      },
    };
  }
  return items;
}
// main component
export default {
  name: 'GSTC',
  setup() {
    let gstc, state;
    const gstcElement = ref(null);
    onMounted(() => {
      /**
       * @type { import("gantt-schedule-timeline-calendar").Config }
       */
      const config = {
        licenseKey:
          '====BEGIN LICENSE KEY====\nRdMl+HWfACuJK8cEbJayWxD/S4dSycPSa6tfJop3hgkfaZ2a3Ch6RlQgWSCb7NluJbp1gWXMCLwFgjf/9WArS6SLrOU8Z8ZOEi2VlOczOrXu4DDguLaae77qwHSuC/Iq5Yh/oZd/Ka1K0g3FQPijK0de4FNJxQo27Q5LlNkEavdrZiP66MHzhpq0wGDlwmoZeCNaWmco+kVFVFY8QBXIlgqhPh5BRNfIb1XQCtxMsIbi9iDoxx6yz5d3MEul0wXg69kN3nNjVZzfGXlzdY2D0ENw5UWTowzs8oMq/mfQ5FFKsu8u++ugrxNavkxzxcZY0T3I4p9NvcRlyi/u9zpr3Q==||U2FsdGVkX18KIedpgJk+rqcAKKkhdrj58pXKOC4/boUiFnLdCjzMNf3PuYkjoFBdzuk3dyc8PIXn15aiV9DoXzcD/KTdaQbcXo+9j6WpkGE=\ne91YAxo3G18V4UicmnHRoBwSHYpu6tqMxYoxTPLQKH4UbQzRWvvMGML5zl8CJNMf5N4xLs+LGNKHsq2xwVcrnMvt0iNkrKJjFHMKKXgwwgRLcOVxGGBYW4Sj/FkpxR/Al2RfYPLfXRHTz5sDy0BYZbuV53SORf3dAZdn+PLWtoQlekGjsLG9BW4EnIOhyRPD9chbR9bvRx16cQX6Gq94NA9ZAU/o3KIK0s47E82hn/YyuMmMKWJNbApIQeEmOo3Y7UNNEFNrvyjQFQ0x8Cj5iBZaopfUOhhNYVkY0RL2cX6R6MS7SOE3FHHJXCQaZlUYy4x9zLnVecYdBasmIazftg==\n====END LICENSE KEY====',
        plugins: [
          TimelinePointer(),
          Selection(),
          ItemResizing(),
          ItemMovement(),
          Bookmarks(),
        ],
        list: {
          columns: {
            data: {
              [GSTC.api.GSTCID('id')]: {
                id: GSTC.api.GSTCID('id'),
                width: 60,
                data: ({ row }) => GSTC.api.sourceID(row.id),
                header: {
                  content: 'ID',
                },
              },
              [GSTC.api.GSTCID('label')]: {
                id: GSTC.api.GSTCID('label'),
                width: 200,
                data: 'label',
                header: {
                  content: 'Label',
                },
              },
            },
          },
          rows: generateRows(),
        },
        chart: {
          items: generateItems(),
        },
      };
      state = GSTC.api.stateFromConfig(config);
      globalThis.state = state;
      gstc = GSTC({
        element: gstcElement.value,
        state,
      });
      globalThis.gstc = gstc;
    });
    onBeforeUnmount(() => {
      if (gstc) gstc.destroy();
    });
    function updateFirstRow() {
      state.update(`config.list.rows.${GSTC.api.GSTCID('0')}`, (row) => {
        row.label = 'Changed dynamically';
        return row;
      });
    }
    function changeZoomLevel() {
      state.update('config.chart.time.zoom', 21);
    }
    return {
      gstcElement,
      updateFirstRow,
      changeZoomLevel,
    };
  },
};
</script>
<style scoped>
.gstc-component {
  margin: 0;
  padding: 0;
}

.toolbox {
  padding: 10px;
}
</style>
