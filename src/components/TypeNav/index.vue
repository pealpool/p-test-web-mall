<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="showList" @mouseleave="reBg">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="listShow">
            <div class="all-sort-list2" @click="goSearch">
              <div v-for="(c1,index) in categoryList" :key="c1.categoryId" class="item">
                <h3
                    :class="{cur : index === whichIndex}"
                    @mouseenter="changeBg(index)"
                >
                  <a href="#"
                     :data-cat1ID="c1.categoryId"
                     :data-CatName=" c1.categoryName "
                  >{{ c1.categoryName }}
                  </a>
                </h3>
                <div
                    :style="{display:index === whichIndex ? 'block':'none'}"
                    class="item-list clearfix"
                >
                  <div class="subitem">
                    <dl v-for="c2 in c1.categoryChild" :key="c2.categoryId" class="fore">
                      <dt>
                        <a href="#"
                           :data-cat2ID="c2.categoryId"
                           :data-CatName=" c2.categoryName "
                        >{{ c2.categoryName }}
                        </a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href="#"
                             :data-cat3ID="c3.categoryId"
                             :data-CatName=" c3.categoryName "
                          >{{ c3.categoryName }}
                          </a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex';
import throttle from 'lodash/throttle'

export default {
  name: "TypeNav",
  data() {
    return {
      whichIndex: -1,
      listShow: true
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.typeNavList.listArr,
    })
  },
  methods: {
    changeBg: throttle(function (index) {
      this.whichIndex = index;
    }, 20),
    reBg() {
      this.whichIndex = -1;
      if (this.$route.path !== '/home') {
        this.listShow = false;
      }
    },
    goSearch(e) {
      e.preventDefault();
      let {cat1id, cat3id, cat2id, catname} = e.target.dataset;
      // console.log(cat1id, cat3id, cat2id, catname);
      if (catname) {
        let query = {categoryName: catname};
        if (cat1id) {
          query.category1Id = cat1id;
        } else if (cat2id) {
          query.category2Id = cat2id;
        } else if (cat3id) {
          query.category3Id = cat3id;
        }
        let location = {name: 'search'};
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        location.query = query;
        this.$router.push(location);
      }
    },
    showList() {
      if (this.$route.path !== '/home') {
        this.listShow = true;
      }
    }
  },
  mounted() {
    if (this.$route.path !== '/home') {
      this.listShow = false;
    }
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  a {
    cursor: pointer;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      z-index: 999;
      transition: all .3s ease-out;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .cur {
            background: #ccc;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }

    .sort-enter,
    .sort-leave-to {
      //height: 0;
      opacity: 0;
    }

    .sort-enter-to,
    .sort-leave {
      //height: 461px;
      opacity: 1;
    }
  }
}

</style>